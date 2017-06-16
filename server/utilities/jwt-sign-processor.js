"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JWT = require("jsonwebtoken");
var TEN_MINUTES = '10m';
var JwtSignProcessor = (function () {
    function JwtSignProcessor() {
    }
    JwtSignProcessor.sign = function (payload, globalSecretKey) {
        var signedToken = '';
        var validationStatus = globalSecretKey && payload;
        if (!validationStatus) {
            throw new Error('Invalid Global Secret Key (or) Payload Specified!');
        }
        signedToken = JWT.sign(payload, globalSecretKey, {
            expiresIn: TEN_MINUTES
        });
        return signedToken;
    };
    return JwtSignProcessor;
}());
exports.default = JwtSignProcessor;
//# sourceMappingURL=jwt-sign-processor.js.map