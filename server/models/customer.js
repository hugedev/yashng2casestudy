"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var object_formatter_1 = require("../utilities/object-formatter");
var Customer = (function () {
    function Customer(customerId, name, address, email, phoneNumber, credit, status, remarks) {
        this.customerId = customerId;
        this.name = name;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.credit = credit;
        this.status = status;
        this.remarks = remarks;
    }
    Customer.prototype.toString = function () {
        return object_formatter_1.default.format(this);
    };
    return Customer;
}());
exports.default = Customer;
//# sourceMappingURL=customer.js.map