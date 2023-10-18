System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var styleProp = {
              cursor: "cursor",
              scrollBehavior: "scroll-behavior",
              scrollSnapType: "scroll-snap-type",
              userSelect: "user-select"
            };
            var modifiers = {
              left: "left",
              middle: "middle",
              right: "right"
            };
            var dataDragScrollId = "dragScrollId";
            var noDragScrollClass = "js-no-drag-scroll";
            var hostElement;
            var startingPosition;
            var preserveScrollBehavior;
            var scrollableElementX;
            var scrollableElementY;
            class DragScrollService {
              constructor(options, modifiers) {
                this.options = options;
                this.modifiers = modifiers;
              }
              isMouseButtonAllowed(ev) {
                if (!Object.keys(this.modifiers).length) {
                  return true;
                }
                switch (ev.button) {
                  case 0:
                    return this.modifiers[modifiers.left];
                  case 1:
                    return this.modifiers[modifiers.middle];
                  case 2:
                    return this.modifiers[modifiers.right];
                  default:
                    return false;
                }
              }
            }
            var knownServices = {};
            function createService(options, modifiers) {
              knownServices[options.id] = new DragScrollService(options, modifiers);
            }
            function getService(identifier) {
              return knownServices[identifier];
            }
            function destroyService(identifier) {
              delete knownServices[identifier];
            }
            function shouldScroll(ev) {
              var _ev$target;
              var id = hostElement.dataset[dataDragScrollId];
              if (!id) {
                return false;
              }
              var service = getService(id);
              if (!service) {
                return false;
              }
              if (!service.isMouseButtonAllowed(ev)) {
                return false;
              }
              var noScrollElement = (_ev$target = ev.target) === null || _ev$target === void 0 ? void 0 : _ev$target.closest(".".concat(noDragScrollClass));
              return !noScrollElement;
            }
            function setGrabbingStyles() {
              hostElement.style.setProperty(styleProp.cursor, "grabbing");
              hostElement.style.setProperty(styleProp.userSelect, "none");
              var style = window.getComputedStyle(hostElement);
              preserveScrollBehavior = {
                scrollBehavior: style.getPropertyValue(styleProp.scrollBehavior),
                scrollSnapType: style.getPropertyValue(styleProp.scrollSnapType)
              };
              if (preserveScrollBehavior.scrollBehavior) {
                hostElement.style.setProperty(styleProp.scrollBehavior, "auto");
              }
              if (preserveScrollBehavior.scrollSnapType) {
                hostElement.style.setProperty(styleProp.scrollSnapType, "none");
              }
            }
            function isScrollableX(el) {
              var hasScrollableContent = el.scrollWidth > el.clientWidth;
              var overflowStyle = window.getComputedStyle(el).overflowX;
              var isOverflowHidden = overflowStyle.startsWith("hidden");
              return hasScrollableContent && !isOverflowHidden;
            }
            function getFirstScrollableAncestorX(el) {
              if (!el || isScrollableX(el)) {
                return el;
              }
              return getFirstScrollableAncestorX(el.parentElement);
            }
            function isScrollableY(el) {
              var hasScrollableContent = el.scrollHeight > el.clientHeight;
              var overflowStyle = window.getComputedStyle(el).overflowY;
              var isOverflowHidden = overflowStyle.startsWith("hidden");
              return hasScrollableContent && !isOverflowHidden;
            }
            function getFirstScrollableAncestorY(el) {
              if (!el || isScrollableY(el)) {
                return el;
              }
              return getFirstScrollableAncestorY(el.parentElement);
            }
            function removeGrabbingStyles() {
              hostElement.style.setProperty(styleProp.cursor, "grab");
              hostElement.style.removeProperty(styleProp.userSelect);
              if (preserveScrollBehavior.scrollBehavior) {
                hostElement.style.setProperty(styleProp.scrollBehavior, preserveScrollBehavior.scrollBehavior);
              }
              if (preserveScrollBehavior.scrollSnapType) {
                hostElement.style.setProperty(styleProp.scrollSnapType, preserveScrollBehavior.scrollSnapType);
              }
            }
            function onMouseDown(event) {
              hostElement = this;
              if (!shouldScroll(event)) {
                return;
              }
              if (event.button === 1) {
                event.preventDefault();
              } else if (event.button === 2) {
                hostElement.addEventListener("contextmenu", preventContextMenu);
              }
              setGrabbingStyles();
              scrollableElementX = null;
              scrollableElementY = null;
              startingPosition = {
                left: hostElement.scrollLeft,
                top: hostElement.scrollTop,
                x: event.clientX,
                y: event.clientY
              };
              document.addEventListener("mousemove", onMouseMove);
              document.addEventListener("mouseup", onMouseUp);
            }
            function preventContextMenu(event) {
              event.preventDefault();
            }
            function onMouseMove(event) {
              if (!scrollableElementX) {
                if (isScrollableX(hostElement)) {
                  scrollableElementX = hostElement;
                } else {
                  var _scrollableElementX$s, _scrollableElementX;
                  scrollableElementX = getFirstScrollableAncestorX(hostElement.parentElement);
                  startingPosition.left = (_scrollableElementX$s = (_scrollableElementX = scrollableElementX) === null || _scrollableElementX === void 0 ? void 0 : _scrollableElementX.scrollLeft) !== null && _scrollableElementX$s !== void 0 ? _scrollableElementX$s : 0;
                }
              }
              if (scrollableElementX) {
                var deltaX = event.clientX - startingPosition.x;
                var newX = startingPosition.left - deltaX;
                scrollableElementX.scrollLeft = newX;
              }
              if (!scrollableElementY) {
                if (isScrollableY(hostElement)) {
                  scrollableElementY = hostElement;
                } else {
                  var _scrollableElementY$s, _scrollableElementY;
                  scrollableElementY = getFirstScrollableAncestorY(hostElement.parentElement);
                  startingPosition.top = (_scrollableElementY$s = (_scrollableElementY = scrollableElementY) === null || _scrollableElementY === void 0 ? void 0 : _scrollableElementY.scrollTop) !== null && _scrollableElementY$s !== void 0 ? _scrollableElementY$s : 0;
                }
              }
              if (scrollableElementY) {
                var deltaY = event.clientY - startingPosition.y;
                var newY = startingPosition.top - deltaY;
                scrollableElementY.scrollTop = newY;
              }
            }
            function onMouseUp(_event) {
              removeGrabbingStyles();
              document.removeEventListener("mousemove", onMouseMove);
              document.removeEventListener("mouseup", onMouseUp);
            }
            var DragScroll = exports('DragScroll', {
              mounted(el, binding) {
                var _binding$value;
                if (!(binding !== null && binding !== void 0 && (_binding$value = binding.value) !== null && _binding$value !== void 0 && _binding$value.id)) {
                  console.error("DragScroll must have a valid identifier.");
                  return;
                }
                el.dataset[dataDragScrollId] = binding.value.id;
                createService(binding.value, binding.modifiers);
                el.style.setProperty(styleProp.cursor, "grab");
                el.addEventListener("mousedown", onMouseDown);
              },
              unmounted(el, binding) {
                var _binding$value2;
                if (binding !== null && binding !== void 0 && (_binding$value2 = binding.value) !== null && _binding$value2 !== void 0 && _binding$value2.id) {
                  destroyService(binding.value.id);
                }
                el.style.removeProperty(styleProp.cursor);
                el.style.removeProperty(styleProp.userSelect);
                el.removeEventListener("mousedown", onMouseDown);
                el.removeEventListener("contextmenu", preventContextMenu);
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
              }
            });
            var NoDragScroll = exports('NoDragScroll', {
              mounted(el) {
                el.classList.add(noDragScrollClass);
              },
              unmounted(el) {
                el.classList.remove(noDragScrollClass);
              }
            });

        })
    };
}));
//# sourceMappingURL=dragScroll.js.map
