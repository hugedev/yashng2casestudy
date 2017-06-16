"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var object_formatter_1 = require("../utilities/object-formatter");
var Order = (function () {
    function Order(orderId, orderDate, customerId, billingAddress, shippingAddress, units, listPrice, remarks) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.customerId = customerId;
        this.billingAddress = billingAddress;
        this.shippingAddress = shippingAddress;
        this.units = units;
        this.listPrice = listPrice;
        this.remarks = remarks;
    }
    Order.prototype.toString = function () {
        return object_formatter_1.default.format(this);
    };
    return Order;
}());
exports.default = Order;
//# sourceMappingURL=order.js.map