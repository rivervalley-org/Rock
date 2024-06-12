System.register(['./colorPair', '@Obsidian/Enums/Core/colorScheme', '@Obsidian/Enums/Core/colorRecipe'], (function (exports) {
  'use strict';
  var ColorPair, ColorScheme, ColorRecipe;
  return {
    setters: [function (module) {
      ColorPair = module.ColorPair;
    }, function (module) {
      ColorScheme = module.ColorScheme;
    }, function (module) {
      ColorRecipe = module.ColorRecipe;
    }],
    execute: (function () {

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

      var html4Colors = new Map([["aliceblue", 0xf0f8ff], ["antiquewhite", 0xfaebd7], ["aqua", 0x00ffff], ["aquamarine", 0x7fffd4], ["azure", 0xf0ffff], ["beige", 0xf5f5dc], ["bisque", 0xffe4c4], ["black", 0x000000], ["blanchedalmond", 0xffebcd], ["blue", 0x0000ff], ["blueviolet", 0x8a2be2], ["brown", 0xa52a2a], ["burlywood", 0xdeb887], ["cadetblue", 0x5f9ea0], ["chartreuse", 0x7fff00], ["chocolate", 0xd2691e], ["coral", 0xff7f50], ["cornflowerblue", 0x6495ed], ["cornsilk", 0xfff8dc], ["crimson", 0xdc143c], ["cyan", 0x00ffff], ["darkblue", 0x00008b], ["darkcyan", 0x008b8b], ["darkgoldenrod", 0xb8860b], ["darkgray", 0xa9a9a9], ["darkgrey", 0xa9a9a9], ["darkgreen", 0x006400], ["darkkhaki", 0xbdb76b], ["darkmagenta", 0x8b008b], ["darkolivegreen", 0x556b2f], ["darkorange", 0xff8c00], ["darkorchid", 0x9932cc], ["darkred", 0x8b0000], ["darksalmon", 0xe9967a], ["darkseagreen", 0x8fbc8f], ["darkslateblue", 0x483d8b], ["darkslategray", 0x2f4f4f], ["darkslategrey", 0x2f4f4f], ["darkturquoise", 0x00ced1], ["darkviolet", 0x9400d3], ["deeppink", 0xff1493], ["deepskyblue", 0x00bfff], ["dimgray", 0x696969], ["dimgrey", 0x696969], ["dodgerblue", 0x1e90ff], ["firebrick", 0xb22222], ["floralwhite", 0xfffaf0], ["forestgreen", 0x228b22], ["fuchsia", 0xff00ff], ["gainsboro", 0xdcdcdc], ["ghostwhite", 0xf8f8ff], ["gold", 0xffd700], ["goldenrod", 0xdaa520], ["gray", 0x808080], ["grey", 0x808080], ["green", 0x008000], ["greenyellow", 0xadff2f], ["honeydew", 0xf0fff0], ["hotpink", 0xff69b4], ["indianred", 0xcd5c5c], ["indigo", 0x4b0082], ["ivory", 0xfffff0], ["khaki", 0xf0e68c], ["lavender", 0xe6e6fa], ["lavenderblush", 0xfff0f5], ["lawngreen", 0x7cfc00], ["lemonchiffon", 0xfffacd], ["lightblue", 0xadd8e6], ["lightcoral", 0xf08080], ["lightcyan", 0xe0ffff], ["lightgoldenrodyellow", 0xfafad2], ["lightgray", 0xd3d3d3], ["lightgrey", 0xd3d3d3], ["lightgreen", 0x90ee90], ["lightpink", 0xffb6c1], ["lightsalmon", 0xffa07a], ["lightseagreen", 0x20b2aa], ["lightskyblue", 0x87cefa], ["lightslategray", 0x778899], ["lightslategrey", 0x778899], ["lightsteelblue", 0xb0c4de], ["lightyellow", 0xffffe0], ["lime", 0x00ff00], ["limegreen", 0x32cd32], ["linen", 0xfaf0e6], ["magenta", 0xff00ff], ["maroon", 0x800000], ["mediumaquamarine", 0x66cdaa], ["mediumblue", 0x0000cd], ["mediumorchid", 0xba55d3], ["mediumpurple", 0x9370d8], ["mediumseagreen", 0x3cb371], ["mediumslateblue", 0x7b68ee], ["mediumspringgreen", 0x00fa9a], ["mediumturquoise", 0x48d1cc], ["mediumvioletred", 0xc71585], ["midnightblue", 0x191970], ["mintcream", 0xf5fffa], ["mistyrose", 0xffe4e1], ["moccasin", 0xffe4b5], ["navajowhite", 0xffdead], ["navy", 0x000080], ["oldlace", 0xfdf5e6], ["olive", 0x808000], ["olivedrab", 0x6b8e23], ["orange", 0xffa500], ["orangered", 0xff4500], ["orchid", 0xda70d6], ["palegoldenrod", 0xeee8aa], ["palegreen", 0x98fb98], ["paleturquoise", 0xafeeee], ["palevioletred", 0xd87093], ["papayawhip", 0xffefd5], ["peachpuff", 0xffdab9], ["peru", 0xcd853f], ["pink", 0xffc0cb], ["plum", 0xdda0dd], ["powderblue", 0xb0e0e6], ["purple", 0x800080], ["red", 0xff0000], ["rosybrown", 0xbc8f8f], ["royalblue", 0x4169e1], ["saddlebrown", 0x8b4513], ["salmon", 0xfa8072], ["sandybrown", 0xf4a460], ["seagreen", 0x2e8b57], ["seashell", 0xfff5ee], ["sienna", 0xa0522d], ["silver", 0xc0c0c0], ["skyblue", 0x87ceeb], ["slateblue", 0x6a5acd], ["slategray", 0x708090], ["slategrey", 0x708090], ["snow", 0xfffafa], ["springgreen", 0x00ff7f], ["steelblue", 0x4682b4], ["tan", 0xd2b48c], ["teal", 0x008080], ["thistle", 0xd8bfd8], ["tomato", 0xff6347], ["turquoise", 0x40e0d0], ["violet", 0xee82ee], ["wheat", 0xf5deb3], ["white", 0xffffff], ["whitesmoke", 0xf5f5f5], ["yellow", 0xffff00], ["yellowgreen", 0x9acd32]]);
      var html4ColorsReverse = new Map();
      html4Colors.forEach((value, key) => {
        if (!html4ColorsReverse.has(value)) {
          html4ColorsReverse.set(value, key);
        }
      });
      function normalize(value, minimum, maximum) {
        return value < minimum ? minimum : value > maximum ? maximum : value;
      }
      function qqhToRgb(q1, q2, hue) {
        if (hue > 360) {
          hue -= 360;
        } else if (hue < 0) {
          hue += 360;
        }
        if (hue < 60) {
          return q1 + (q2 - q1) * hue / 60;
        } else if (hue < 180) {
          return q2;
        } else if (hue < 240) {
          return q1 + (q2 - q1) * (240 - hue) / 60;
        } else {
          return q1;
        }
      }
      function parseHexValue(hex) {
        var value = parseInt(hex, 16);
        return isNaN(value) ? 0 : value;
      }
      function parseHexString(hex) {
        hex = hex.startsWith("#") ? hex.substring(1) : hex;
        if (hex.length === 8) {
          return [parseHexValue(hex.substring(0, 2)), parseHexValue(hex.substring(2, 4)), parseHexValue(hex.substring(4, 6)), parseHexValue(hex.substring(6, 8)) / 255];
        } else if (hex.length === 6) {
          return [parseHexValue(hex.substring(0, 2)), parseHexValue(hex.substring(2, 4)), parseHexValue(hex.substring(4, 6)), 1];
        } else if (hex.length === 4) {
          return [parseHexValue(hex.substring(0, 1).repeat(2)), parseHexValue(hex.substring(1, 2).repeat(2)), parseHexValue(hex.substring(2, 3).repeat(2)), parseHexValue(hex.substring(3, 4).repeat(2)) / 255];
        } else if (hex.length === 3) {
          return [parseHexValue(hex.substring(0, 1).repeat(2)), parseHexValue(hex.substring(1, 2).repeat(2)), parseHexValue(hex.substring(2, 3).repeat(2)), 1];
        } else {
          return [0, 0, 0, 1];
        }
      }
      function asFloat(str) {
        var num = parseFloat(str);
        return isNaN(num) ? 0 : num;
      }
      class RockColor {
        get alpha() {
          return this.alphaInternal;
        }
        set alpha(value) {
          this.alphaInternal = normalize(value, 0, 1);
        }
        get r() {
          return this.rgbInternal[0];
        }
        set r(value) {
          this.rgbInternal[0] = normalize(value, 0, 255);
          this.updateHslFromRgb();
        }
        get g() {
          return this.rgbInternal[1];
        }
        set g(value) {
          this.rgbInternal[1] = normalize(value, 0, 255);
          this.updateHslFromRgb();
        }
        get b() {
          return this.rgbInternal[2];
        }
        set b(value) {
          this.rgbInternal[2] = normalize(value, 0, 255);
          this.updateHslFromRgb();
        }
        get luma() {
          var _this$toStandardRgb = this.toStandardRgb(),
            red = _this$toStandardRgb.red,
            green = _this$toStandardRgb.green,
            blue = _this$toStandardRgb.blue;
          return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
        }
        get hue() {
          return this.hueInternal;
        }
        set hue(value) {
          while (value > 360) {
            value -= 360;
          }
          while (value < 0) {
            value += 360;
          }
          this.hueInternal = value;
          this.updateRgbFromHsl();
        }
        get saturation() {
          return this.saturationInternal;
        }
        set saturation(value) {
          this.saturationInternal = normalize(value, 0, 1);
          this.updateRgbFromHsl();
        }
        get luminosity() {
          return this.luminosityInternal;
        }
        set luminosity(value) {
          this.luminosityInternal = normalize(value, 0, 1);
          this.updateRgbFromHsl();
        }
        get hex() {
          return this.toHex();
        }
        get isLight() {
          return this.luminosityInternal > 0.5;
        }
        get isDark() {
          return !this.isLight;
        }
        constructor(p1, p2, p3, p4, p5) {
          _defineProperty(this, "rgbInternal", [0, 0, 0]);
          _defineProperty(this, "alphaInternal", 1);
          if (typeof p1 === "number") {
            if (typeof p2 === "undefined") {
              this.constructFromSingleNumber(p1);
            } else if (typeof p3 === "number") {
              if (typeof p4 === "number") {
                this.constructFromRgb([p1, p2, p3], p4);
              } else {
                this.constructFromRgb([p1, p2, p3], 1);
              }
              if (typeof p5 === "string") {
                this.textInternal = p5;
              }
            }
          } else if (typeof p1 === "string") {
            this.constructFromString(p1);
          } else if (p1.length === 3) {
            if (typeof p2 === "number") {
              this.constructFromRgb([p1[0], p1[1], p1[2]], p2);
            } else {
              this.constructFromRgb([p1[0], p1[1], p1[2]], 1);
            }
            if (typeof p3 === "string") {
              this.textInternal = p3;
            }
          }
          this.updateHslFromRgb();
        }
        constructFromSingleNumber(color) {
          this.rgbInternal[0] = color & 0xff;
          color >>= 8;
          this.rgbInternal[1] = color & 0xff;
          color >>= 8;
          this.rgbInternal[2] = color & 0xff;
          this.alphaInternal = 1;
        }
        constructFromString(color) {
          if (color.startsWith("#")) {
            var rgba = parseHexString(color);
            this.rgbInternal[0] = normalize(rgba[0], 0, 255);
            this.rgbInternal[1] = normalize(rgba[1], 0, 255);
            this.rgbInternal[2] = normalize(rgba[2], 0, 255);
            this.alphaInternal = normalize(rgba[3], 0, 1);
          } else if (color.startsWith("rgba")) {
            var parts = color.replace(/ /g, "").replace("rgba(", "").replace(")", "").split(",");
            if (parts.length === 4) {
              this.rgbInternal[0] = normalize(asFloat(parts[0].trim()), 0, 255);
              this.rgbInternal[1] = normalize(asFloat(parts[1].trim()), 0, 255);
              this.rgbInternal[2] = normalize(asFloat(parts[2].trim()), 0, 255);
              this.alphaInternal = normalize(asFloat(parts[3].trim()), 0, 1);
            }
          } else if (color.startsWith("rgb")) {
            var _parts = color.replace(/ /g, "").replace("rgb(", "").replace(")", "").split(",");
            if (_parts.length === 3) {
              this.rgbInternal[0] = normalize(asFloat(_parts[0].trim()), 0, 255);
              this.rgbInternal[1] = normalize(asFloat(_parts[1].trim()), 0, 255);
              this.rgbInternal[2] = normalize(asFloat(_parts[2].trim()), 0, 255);
              this.alphaInternal = 1;
            }
          } else {
            var namedColor = RockColor.getColorFromKeyword(color);
            if (namedColor != null) {
              this.rgbInternal[0] = namedColor.r;
              this.rgbInternal[1] = namedColor.g;
              this.rgbInternal[2] = namedColor.b;
              this.alpha = namedColor.alpha;
            }
          }
        }
        constructFromRgb(rgb, alpha) {
          this.rgbInternal[0] = normalize(rgb[0], 0, 255);
          this.rgbInternal[1] = normalize(rgb[1], 0, 255);
          this.rgbInternal[2] = normalize(rgb[2], 0, 255);
          this.alphaInternal = normalize(alpha, 0, 1);
        }
        updateHslFromRgb() {
          var red = this.rgbInternal[0] / 255;
          var green = this.rgbInternal[1] / 255;
          var blue = this.rgbInternal[2] / 255;
          var max = Math.max(red, green, blue);
          var min = Math.min(red, green, blue);
          this.luminosityInternal = (max + min) / 2;
          var diff = max - min;
          if (Math.abs(diff) < 0.00001) {
            this.saturationInternal = 0;
            this.hueInternal = 0;
          } else {
            if (this.luminosityInternal <= 0.5) {
              this.saturationInternal = diff / (max + min);
            } else {
              this.saturationInternal = diff / (2 - max - min);
            }
            var redDist = (max - red) / diff;
            var greenDist = (max - green) / diff;
            var blueDist = (max - blue) / diff;
            var hue;
            if (red == max) {
              hue = blueDist - greenDist;
            } else if (green == max) {
              hue = 2 + redDist - blueDist;
            } else {
              hue = 4 + greenDist - redDist;
            }
            hue = hue * 60;
            if (hue < 0) {
              hue += 360;
            }
            this.hueInternal = normalize(hue, 0, 360);
          }
        }
        updateRgbFromHsl() {
          var p2 = this.luminosityInternal <= 0.5 ? this.luminosityInternal * (1 + this.saturationInternal) : this.luminosityInternal + this.saturationInternal - this.luminosityInternal * this.saturationInternal;
          var p1 = 2 * this.luminosityInternal - p2;
          var red;
          var green;
          var blue;
          if (this.saturationInternal === 0) {
            red = this.luminosityInternal;
            green = this.luminosityInternal;
            blue = this.luminosityInternal;
          } else {
            red = qqhToRgb(p1, p2, this.hueInternal + 120);
            green = qqhToRgb(p1, p2, this.hueInternal);
            blue = qqhToRgb(p1, p2, this.hueInternal - 120);
          }
          this.rgbInternal[0] = normalize(Math.round(red * 255), 0, 255);
          this.rgbInternal[1] = normalize(Math.round(green * 255), 0, 255);
          this.rgbInternal[2] = normalize(Math.round(blue * 255), 0, 255);
        }
        static getColorFromKeyword(keyword) {
          if (keyword === "transparent") {
            return new RockColor(0, 0, 0, 0, keyword);
          }
          var rgb = html4Colors.get(keyword);
          if (rgb !== undefined) {
            var _red = rgb >> 16 & 0xff;
            var _green = rgb >> 8 & 0xff;
            var _blue = rgb & 0xff;
            return new RockColor(_red, _green, _blue, 1, keyword);
          }
          return null;
        }
        static calculateContrastRatio(color1, color2) {
          var l1;
          var l2;
          if (color1.luminosity > color2.luminosity) {
            l1 = color1;
            l2 = color2;
          } else {
            l1 = color2;
            l2 = color1;
          }
          return (l1.luma + 0.05) / (l2.luma + 0.05);
        }
        static calculateColorPair(color) {
          var colorScheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ColorScheme.Light;
          var foregroundColor = RockColor.calculateColorRecipe(color, ColorRecipe.Darkest);
          var backgroundColor = RockColor.calculateColorRecipe(color, ColorRecipe.Lightest);
          var colorPair = new ColorPair(foregroundColor, backgroundColor);
          if (colorScheme === ColorScheme.Dark) {
            colorPair.flip();
          }
          return colorPair;
        }
        static calculateColorRecipe(color, recipe) {
          var recipeColor = color.clone();
          var recipeSaturation = 0;
          var recipeLuminosity = 0;
          switch (recipe) {
            case ColorRecipe.Lightest:
              recipeSaturation = 0.88;
              recipeLuminosity = 0.87;
              break;
            case ColorRecipe.Light:
              recipeSaturation = 0.10;
              recipeLuminosity = 0.95;
              break;
            case ColorRecipe.Medium:
              recipeSaturation = 0.20;
              recipeLuminosity = 0.66;
              break;
            case ColorRecipe.Dark:
              recipeSaturation = 0.30;
              recipeLuminosity = 0.45;
              break;
            case ColorRecipe.Darkest:
              recipeSaturation = 0.60;
              recipeLuminosity = 0.20;
              break;
            case ColorRecipe.Primary:
              recipeSaturation = 0.70;
              recipeLuminosity = 0.80;
              break;
          }
          if (color.saturation <= 0.15) {
            recipeSaturation = color.saturation;
          }
          recipeColor.saturation = recipeSaturation;
          recipeColor.luminosity = recipeLuminosity;
          return recipeColor;
        }
        lighten(percentage) {
          this.luminosity = this.luminosity + percentage / 100;
        }
        darken(percentage) {
          this.luminosity = this.luminosity - percentage / 100;
        }
        saturate(percentage) {
          this.saturation = this.saturation + percentage / 100;
        }
        desaturate(percentage) {
          this.saturation = this.saturation - percentage / 100;
        }
        fadeIn(percentage) {
          this.alpha = this.alpha + percentage / 100;
        }
        fadeOut(percentage) {
          this.alpha = this.alpha - percentage / 100;
        }
        adjustHueByPercent(percentage) {
          this.hue = this.hue + 360 * (percentage / 100);
        }
        adjustHueByDegrees(degrees) {
          this.hue = this.hue + degrees;
        }
        tint(percentage) {
          this.mix(new RockColor("#ffffff"), percentage);
        }
        shade(percentage) {
          this.mix(new RockColor("#000000"), percentage);
        }
        mix(mixColor, percentage) {
          var amount = (percentage !== null && percentage !== void 0 ? percentage : 50) / 100;
          this.r = mixColor.r * amount + this.r * (1 - amount);
          this.g = mixColor.g * amount + this.g * (1 - amount);
          this.b = mixColor.b * amount + this.b * (1 - amount);
        }
        grayscale() {
          this.saturate(-100);
        }
        clone() {
          return new RockColor(this.rgbInternal, this.alpha);
        }
        toRgba() {
          return "rgba(".concat(Math.floor(this.r), ", ").concat(Math.floor(this.g), ", ").concat(Math.floor(this.b), ", ").concat(this.alpha, ")");
        }
        toHex() {
          var r = Math.round(this.r).toString(16).padStart(2, "0");
          var g = Math.round(this.g).toString(16).padStart(2, "0");
          var b = Math.round(this.b).toString(16).padStart(2, "0");
          var a = Math.round(this.alpha * 255).toString(16).padStart(2, "0");
          if (a === "ff") {
            return "#".concat(r).concat(g).concat(b);
          } else {
            return "#".concat(r).concat(g).concat(b).concat(a);
          }
        }
        valueOf() {
          return (this.r + this.g + this.b) * this.alpha;
        }
        compareTo(otherColor) {
          if (otherColor === undefined || otherColor === null) {
            return -1;
          }
          if (this.r === otherColor.r && this.g === otherColor.g && this.b === otherColor.b && this.alpha === otherColor.alpha) {
            return 0;
          }
          return this.valueOf() > otherColor.valueOf() ? 1 : -1;
        }
        isSimilarTo(otherColor) {
          var similarityPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.95;
          similarityPercent = normalize(similarityPercent, 0, 1);
          if (similarityPercent === 0) {
            return true;
          }
          if (this.compareTo(otherColor) === 0) {
            return true;
          }
          if (similarityPercent === 1) {
            return false;
          }
          function calculateWeightedColorDistance(r1, g1, b1, r2, g2, b2, maxColorValue) {
            var redDiffSquared = Math.pow(r2 - r1, 2);
            var greenDiffSquared = Math.pow(g2 - g1, 2);
            var blueDiffSquared = Math.pow(b2 - b1, 2);
            var redAverage = (r2 + r1) / 2;
            var redAveragePercentage = redAverage / maxColorValue;
            return Math.sqrt((2 + redAveragePercentage) * redDiffSquared + 4 * greenDiffSquared + (3 - redAveragePercentage) * blueDiffSquared);
          }
          function calculateSimilarityPercent(r1, g1, b1, r2, g2, b2, maxColorValue) {
            var maxDistance = calculateWeightedColorDistance(maxColorValue, maxColorValue, maxColorValue, 0, 0, 0, maxColorValue);
            var colorDistance = calculateWeightedColorDistance(r1, g1, b1, r2, g2, b2, maxColorValue);
            return 1 - colorDistance / maxDistance;
          }
          var sRgb = this.toStandardRgb();
          var otherSRgb = otherColor.toStandardRgb();
          var actualSimilarityPercent = calculateSimilarityPercent(sRgb.red, sRgb.green, sRgb.blue, otherSRgb.red, otherSRgb.green, otherSRgb.blue, 1);
          if (actualSimilarityPercent >= similarityPercent) {
            return true;
          } else if (similarityPercent - actualSimilarityPercent <= 0.05) {
            actualSimilarityPercent = calculateSimilarityPercent(this.r, this.g, this.b, otherColor.r, otherColor.g, otherColor.b, 255);
            return actualSimilarityPercent >= similarityPercent;
          } else {
            return false;
          }
        }
        toStandardRgb() {
          var linearR = this.r / 255;
          var linearG = this.g / 255;
          var linearB = this.b / 255;
          var red = linearR <= 0.03928 ? linearR / 12.92 : Math.pow((linearR + 0.055) / 1.055, 2.4);
          var green = linearG <= 0.03928 ? linearG / 12.92 : Math.pow((linearG + 0.055) / 1.055, 2.4);
          var blue = linearB <= 0.03928 ? linearB / 12.92 : Math.pow((linearB + 0.055) / 1.055, 2.4);
          return {
            red,
            green,
            blue
          };
        }
      } exports('RockColor', RockColor);

    })
  };
}));
//# sourceMappingURL=rockColor.js.map
