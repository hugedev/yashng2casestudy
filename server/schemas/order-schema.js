"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongo_connection_initializer_1 = require("../utilities/mongo-connection-initializer");
var Connection = mongo_connection_initializer_1.default.getInstance().Connection;
var Schema = Connection.Schema;
var OrderSchema = new Schema({
    orderId: Number,
    orderDate: Date,
    customerId: Number,
    billingAddress: String,
    shippingAddress: String,
    units: Number,
    listPrice: Number,
    remarks: String
});
var OrderMappedModel = Connection.model('orders', OrderSchema);
exports.default = OrderMappedModel;
//# sourceMappingURL=order-schema.js.map