"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var internet_customer_1 = require("../models/internet-customer");
var DEFAULT_TIMEOUT_PERIOD = 1000;
var FOUND_INDEX_POS = 0;
var MIN_CREDIT_LIMIT = 1000;
var InMemoryCustomerService = (function () {
    function InMemoryCustomerService() {
        this.customers = [];
        this.customers =
            [
                new internet_customer_1.default(11, 'Northwind Traders', 'Bangalore', 'info@ntw.com', '080-4089343', 23000, true, 'Simple Customer Record', 'http://blogs.msdn.com/nwt'),
                new internet_customer_1.default(12, 'Southwind Traders', 'Bangalore', 'info@ntw.com', '080-4089343', 23000, true, 'Simple Customer Record', 'http://blogs.msdn.com/nwt'),
                new internet_customer_1.default(13, 'Eastwind Traders', 'Bangalore', 'info@ntw.com', '080-4089343', 23000, true, 'Simple Customer Record', 'http://blogs.msdn.com/nwt'),
                new internet_customer_1.default(14, 'Westwind Traders', 'Mangalore', 'info@ntw.com', '080-4089343', 13000, true, 'Simple Customer Record', 'http://blogs.msdn.com/nwt'),
                new internet_customer_1.default(15, 'Oxyrich Traders', 'Mysore', 'info@ntw.com', '080-4089343', 23000, true, 'Simple Customer Record', 'http://blogs.msdn.com/nwt'),
                new internet_customer_1.default(16, 'Adventureworks', 'Bangalore', 'info@ntw.com', '080-4089343', 33000, true, 'Simple Customer Record', 'http://blogs.msdn.com/nwt'),
                new internet_customer_1.default(17, 'Footmart', 'Bangalore', 'info@ntw.com', '080-4089343', 23000, false, 'Simple Customer Record', 'http://blogs.msdn.com/nwt'),
                new internet_customer_1.default(18, 'ePublishers', 'Hyderabad', 'info@ntw.com', '080-4089343', 43000, false, 'Simple Customer Record', 'http://blogs.msdn.com/nwt')
            ];
    }
    InMemoryCustomerService.prototype.getCustomers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.customers);
            }, DEFAULT_TIMEOUT_PERIOD);
        });
        return promise;
    };
    InMemoryCustomerService.prototype.getCustomer = function (customerId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var validation = false;
            var filteredCustomer = null;
            for (var _i = 0, _a = _this.customers; _i < _a.length; _i++) {
                var customer = _a[_i];
                if (customer && customer.customerId === customerId) {
                    validation = true;
                    filteredCustomer = customer;
                    break;
                }
            }
            if (!validation) {
                reject({
                    status: false
                });
                return;
            }
            if (typeof filteredCustomer !== 'undefined')
                resolve(filteredCustomer);
        });
        return promise;
    };
    InMemoryCustomerService.prototype.getCustomersByName = function (customerName) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var filteredCustomers = _this.customers.filter(function (customer) {
                var validation = customer &&
                    typeof customer.name !== 'undefined' &&
                    customer.name.indexOf(customerName) >= FOUND_INDEX_POS;
                return validation;
            });
            resolve(filteredCustomers);
        });
        return promise;
    };
    InMemoryCustomerService.prototype.addNewCustomer = function (customer) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var validation = customer &&
                customer.name && typeof customer.credit !== 'undefined' &&
                customer.credit >= MIN_CREDIT_LIMIT;
            if (!validation) {
                reject({
                    status: false
                });
                return;
            }
            _this.customers.push(customer);
            resolve(customer);
        });
        return promise;
    };
    return InMemoryCustomerService;
}());
exports.default = InMemoryCustomerService;
//# sourceMappingURL=inmemory-customer-service.js.map