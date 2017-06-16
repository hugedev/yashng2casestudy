import * as express from 'express';

import HttpStatusCodes from '../utilities/http-status-codes';
import OrderService from '../services/order-service';

class OrderRouting {
    private router: express.Router;
    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
        this.router = express.Router();
        this.initializeRouting();
    }

    private initializeRouting() {
        this.router.get('/:customerId',
            async (request, response) => {
                try {
                    let parsedCustomerId = parseInt(request.params.customerId);
                    let orders = await this.orderService.getOrdersByCustomerId(parsedCustomerId);

                    response.status(HttpStatusCodes.OK).json(orders);
                } catch (error) {
                    response.status(HttpStatusCodes.SERVER_ERROR).json(error);
                }
            });
    }

    get Router() {
        return this.router;
    }
}

export default OrderRouting;
