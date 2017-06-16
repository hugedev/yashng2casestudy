"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CorsProcessor = (function () {
    function CorsProcessor() {
    }
    CorsProcessor.applyCors = function (request, response, next) {
        if (response) {
            response.header('Access-Control-Allow-Credentials', 'true');
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Methods', '*');
            response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            next();
        }
    };
    return CorsProcessor;
}());
exports.default = CorsProcessor;
//# sourceMappingURL=cors-processor.js.map