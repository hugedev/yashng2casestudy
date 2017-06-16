import MongoConnectionInitializer from '../utilities/mongo-connection-initializer';

let Connection = MongoConnectionInitializer.getInstance().Connection;
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

export default OrderMappedModel;
