"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var internet_customer_1 = require("../models/internet-customer");
var customer_service_1 = require("../services/customer-service");
var http_status_codes_1 = require("../utilities/http-status-codes");
var INVALID_SOCKET_SERVER_SPECIFIED = 'Invalid Socket Server Specified!';
var NEW_CUSTOMER_EVENT = 'NewCustomerRecord';
var DEFAULT_NO_OF_RECORDS = 25;
var CustomerRouting = (function () {
    function CustomerRouting(socketServer) {
        this.socketServer = socketServer;
        this.customerService = new customer_service_1.default();
        if (!this.socketServer) {
            throw new Error(INVALID_SOCKET_SERVER_SPECIFIED);
        }
        this.router = express.Router();
        this.initializeRouting();
    }
    CustomerRouting.prototype.initializeRouting = function () {
        var _this = this;
        this.router.get('/:noOfRecords', function (request, response) {
            var noOfRecords = parseInt(request.params.noOfRecords) || DEFAULT_NO_OF_RECORDS;
            _this.customerService
                .getCustomers(noOfRecords)
                .then(function (result) { return response.status(http_status_codes_1.default.OK).json(result); })
                .catch(function (error) { return response.status(http_status_codes_1.default.CLIENT_ERROR); });
        });
        this.router.get('/detail/:customerId', function (request, response) {
            var parsedCustomerId = parseInt(request.params.customerId);
            _this.customerService.getCustomer(parsedCustomerId)
                .then(function (result) { return response.status(http_status_codes_1.default.OK).json(result); })
                .catch(function (error) { return response.status(http_status_codes_1.default.CLIENT_ERROR); });
        });
        this.router.get('/search/:customerName', function (request, response) {
            var searchString = request.params.customerName;
            _this.customerService.getCustomersByName(searchString)
                .then(function (result) { return response.status(http_status_codes_1.default.OK).json(result); })
                .catch(function (error) { return response.status(http_status_codes_1.default.CLIENT_ERROR); });
        });
        this.router.post('/', function (request, response) {
            var customer = request.body;
            customer.__proto__ = new internet_customer_1.default;
            _this.customerService.addNewCustomer(customer)
                .then(function (result) {
                _this.socketServer.emit(NEW_CUSTOMER_EVENT, result);
                response.status(http_status_codes_1.default.OK).json(result);
            })
                .catch(function (error) { return response.status(http_status_codes_1.default.CLIENT_ERROR); });
        });
    };
    Object.defineProperty(CustomerRouting.prototype, "Router", {
        get: function () {
            return this.router;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerRouting;
}());
exports.default = CustomerRouting;
//# sourceMappingURL=customer-routing.js.map