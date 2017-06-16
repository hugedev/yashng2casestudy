"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var COLUMN_DELIMITER = ', ';
var NO_OF_TRAIL_CHARACTERS = 2;
var START_POS = 0;
var ObjectFormatter = (function () {
    function ObjectFormatter() {
    }
    ObjectFormatter.format = function (obj) {
        var formattedString = '';
        if (obj) {
            for (var property in obj) {
                var propertyValue = obj[property];
                if (typeof propertyValue !== 'function') {
                    formattedString += "" + propertyValue + COLUMN_DELIMITER;
                }
            }
            formattedString = formattedString.substr(START_POS, formattedString.length - NO_OF_TRAIL_CHARACTERS);
        }
        return formattedString;
    };
    return ObjectFormatter;
}());
exports.default = ObjectFormatter;
//# sourceMappingURL=object-formatter.js.map