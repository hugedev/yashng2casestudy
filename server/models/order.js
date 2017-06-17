"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_formatter_1 = require("../utilities/object-formatter");
class Order {
    constructor(orderId, orderDate, customerId, billingAddress, shippingAddress, units, listPrice, remarks) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.customerId = customerId;
        this.billingAddress = billingAddress;
        this.shippingAddress = shippingAddress;
        this.units = units;
        this.listPrice = listPrice;
        this.remarks = remarks;
    }
    toString() {
        return object_formatter_1.default.format(this);
    }
}
exports.default = Order;
