"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rest_service_hosting_1 = require("./hosting/rest-service-hosting");
var host = new rest_service_hosting_1.default();
host.start()
    .then(function (result) { return console.log('REST Service Successfully Started ...'); });
process.on('exit', function () {
    host.stop()
        .then(function (result) {
        process.exit();
    });
});
process.on('SIGINT', function () {
    host.stop()
        .then(function (result) {
        console.log('REST Service Stopped!');
        process.exit();
    });
});
//# sourceMappingURL=index.js.map