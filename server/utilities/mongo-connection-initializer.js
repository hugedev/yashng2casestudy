"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var DEFAULT_DB_SERVER_NAME = 'localhost';
var DEFAULT_PORT_NUMBER = 27017;
var DEFAULT_DB_NAME = 'yashcrmsystemdb';
var MongoConnectionInitializer = (function () {
    function MongoConnectionInitializer(databaseServerName, portNumber, databaseName) {
        if (databaseServerName === void 0) { databaseServerName = DEFAULT_DB_SERVER_NAME; }
        if (portNumber === void 0) { portNumber = DEFAULT_PORT_NUMBER; }
        if (databaseName === void 0) { databaseName = DEFAULT_DB_NAME; }
        this.databaseServerName = databaseServerName;
        this.portNumber = portNumber;
        this.databaseName = databaseName;
        var connectionString = "mongodb://" + databaseServerName + ":" + portNumber + "/" + databaseName;
        mongoose.connect(connectionString);
        mongoose.Promise = Promise;
    }
    Object.defineProperty(MongoConnectionInitializer.prototype, "Connection", {
        get: function () {
            return mongoose;
        },
        enumerable: true,
        configurable: true
    });
    MongoConnectionInitializer.getInstance = function () {
        if (typeof MongoConnectionInitializer.connectionInitializer === 'undefined') {
            MongoConnectionInitializer.connectionInitializer = new MongoConnectionInitializer();
        }
        return MongoConnectionInitializer.connectionInitializer;
    };
    return MongoConnectionInitializer;
}());
exports.default = MongoConnectionInitializer;
//# sourceMappingURL=mongo-connection-initializer.js.map