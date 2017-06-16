import ObjectFormatter from '../utilities/object-formatter';

class Order {
    constructor(public orderId?: number, public orderDate?: Date,
        public customerId?: number, public billingAddress?: string,
        public shippingAddress?: string, public units?: number,
        public listPrice?: number, public remarks?: string) { }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export default Order;
