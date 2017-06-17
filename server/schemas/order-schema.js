"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_connection_initializer_1 = require("../utilities/mongo-connection-initializer");
let Connection = mongo_connection_initializer_1.default.getInstance().Connection;
let Schema = Connection.Schema;
let OrderSchema = new Schema({
    orderId: Number,
    orderDate: Date,
    customerId: Number,
    billingAddress: String,
    shippingAddress: String,
    units: Number,
    listPrice: Number,
    remarks: String
});
let OrderMappedModel = Connection.model('orders', OrderSchema);
exports.default = OrderMappedModel;
