"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var morgan = require("morgan");
var express = require("express");
var bodyParser = require("body-parser");
var socketio = require("socket.io");
var http_status_codes_1 = require("../utilities/http-status-codes");
var userprofile_routing_1 = require("../routing/userprofile-routing");
var customer_routing_1 = require("../routing/customer-routing");
var order_routing_1 = require("../routing/order-routing");
var cors_processor_1 = require("../utilities/cors-processor");
var random_generator_1 = require("../utilities/random-generator");
var DEFAULT_PORT = 9090;
var DEFAULT_GLOBAL_SECRET_KEY = 'Yash Technologies, Hyderabad';
var RestServiceHost = (function () {
    function RestServiceHost() {
        this.portNumber = process.env.PORT_NUMBER || DEFAULT_PORT;
        this.globalSecretKey =
            process.env.GLOBAL_SECRET_KEY || DEFAULT_GLOBAL_SECRET_KEY;
        this.app = express();
        this.httpServer = http.createServer(this.app);
        this.sioServer = socketio.listen(this.httpServer);
        this.customerRouting = new customer_routing_1.default(this.sioServer);
        this.userProfileRouting = new userprofile_routing_1.default(this.globalSecretKey);
        this.orderRouting = new order_routing_1.default();
        this.initializeMiddleware();
    }
    RestServiceHost.prototype.handleAuthorizationError = function (error, request, response, next) {
        if (error && error.constructor.name === 'UnauthorizedError') {
            response.status(http_status_codes_1.default.CLIENT_ERROR).json({
                status: 'Authorization Failed'
            });
            return;
        }
        next();
    };
    RestServiceHost.prototype.initializeMiddleware = function () {
        this.sioServer.on('connection', function (socketClient) {
            var socketClientId = random_generator_1.default.generate();
            socketClient.client.id = socketClientId.toString();
            console.log("Socket Client " + socketClient.client.id + " Connected ...");
            socketClient.on('disconnect', function () {
                console.log("Socket Client " + socketClient.client.id + " Disconnected ...");
            });
        });
        this.app.use(morgan("tiny"));
        this.app.use(this.handleAuthorizationError);
        this.app.use(cors_processor_1.default.applyCors);
        var jwtOptions = {
            secret: this.globalSecretKey
        };
        this.app.use(bodyParser.json());
        this.app.use('/api/customers', this.customerRouting.Router);
        this.app.use('/authenticate', this.userProfileRouting.Router);
        this.app.use('/api/orders', this.orderRouting.Router);
        var staticWebFolder = __dirname + "/../../client";
        this.app.use('/', express.static(staticWebFolder));
    };
    RestServiceHost.prototype.start = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.httpServer.listen(_this.portNumber, function () {
                resolve(true);
            });
        });
        return promise;
    };
    RestServiceHost.prototype.stop = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.httpServer.listening) {
                _this.httpServer.close(function () { return resolve(true); });
            }
        });
        return promise;
    };
    return RestServiceHost;
}());
exports.default = RestServiceHost;
//# sourceMappingURL=rest-service-hosting.js.map