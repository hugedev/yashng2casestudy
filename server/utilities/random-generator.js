"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_MINIMUM = 0;
var DEFAULT_MAXIMUM = 1000000;
var RandomGenerator = (function () {
    function RandomGenerator() {
    }
    RandomGenerator.generate = function (minimum, maximum) {
        if (minimum === void 0) { minimum = DEFAULT_MINIMUM; }
        if (maximum === void 0) { maximum = DEFAULT_MAXIMUM; }
        var generatedNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
        return generatedNumber;
    };
    return RandomGenerator;
}());
exports.default = RandomGenerator;
//# sourceMappingURL=random-generator.js.map