import OrderMappedModel from '../schemas/order-schema';
import Order from '../models/order';
import IOrderService from './iorder-service';

class OrderService implements IOrderService {
    getOrdersByCustomerId(customerId: number): Promise<Order[]> {
        let promise = new Promise(
            async (resolve, reject) => {
                try {
                    let filteredOrders = await OrderMappedModel.find({
                        customerId: customerId
                    }).exec();

                    resolve(filteredOrders);
                } catch (error) {
                    reject(error);
                }
            });

        return promise;
    }
}

export default OrderService;
