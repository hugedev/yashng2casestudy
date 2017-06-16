"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongo_connection_initializer_1 = require("../utilities/mongo-connection-initializer");
var Connection = mongo_connection_initializer_1.default.getInstance().Connection;
var Schema = Connection.Schema;
var CustomerSchema = new Schema({
    customerId: Number,
    name: String,
    address: String,
    email: String,
    phone: String,
    credit: Number,
    status: Boolean,
    remarks: String,
    blogUrl: String
});
var CustomerMappedModel = Connection.model('customers', CustomerSchema);
exports.default = CustomerMappedModel;
//# sourceMappingURL=customer-schema.js.map