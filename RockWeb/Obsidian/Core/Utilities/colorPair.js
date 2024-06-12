System.register(['./rockColor'], (function (exports) {
    'use strict';
    var RockColor;
    return {
        setters: [function (module) {
            RockColor = module.RockColor;
        }],
        execute: (function () {

            class ColorPair {
              get contrastRatio() {
                return RockColor.calculateContrastRatio(this.foregroundColor, this.backgroundColor);
              }
              constructor(foregroundColor, backgroundColor) {
                this.foregroundColor = foregroundColor;
                this.backgroundColor = backgroundColor;
              }
              flip() {
                var tempColor = this.foregroundColor;
                this.foregroundColor = this.backgroundColor;
                this.backgroundColor = tempColor;
              }
            } exports('ColorPair', ColorPair);

        })
    };
}));
//# sourceMappingURL=colorPair.js.map
