import Order from '../models/order';

interface IOrderService {
    getOrdersByCustomerId(customerId: number): Promise<Order[]>;
}

export default IOrderService;
