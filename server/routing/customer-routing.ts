import * as express from 'express';
import * as socketio from 'socket.io';

import InternetCustomer from '../models/internet-customer';
import CustomerService from '../services/customer-service';
import HttpStatusCodes from '../utilities/http-status-codes';

const INVALID_SOCKET_SERVER_SPECIFIED: string = 'Invalid Socket Server Specified!';
const NEW_CUSTOMER_EVENT: string = 'NewCustomerRecord';
const DEFAULT_NO_OF_RECORDS: number = 25;

class CustomerRouting {
    private customerService: CustomerService = new CustomerService();
    private router: express.Router;

    constructor(private socketServer: SocketIO.Server) {
        if (!this.socketServer) {
            throw new Error(INVALID_SOCKET_SERVER_SPECIFIED);
        }

        this.router = express.Router();
        this.initializeRouting();
    }

    private initializeRouting() {
        this.router.get('/:noOfRecords', (request, response) => {
            let noOfRecords = parseInt(request.params.noOfRecords) || DEFAULT_NO_OF_RECORDS;
            
            this.customerService
                .getCustomers(noOfRecords)
                .then(result => response.status(HttpStatusCodes.OK).json(result))
                .catch(error => response.status(HttpStatusCodes.CLIENT_ERROR));
        });

        this.router.get('/detail/:customerId', (request, response) => {
            let parsedCustomerId = parseInt(request.params.customerId);

            this.customerService.getCustomer(parsedCustomerId)
                .then(result => response.status(HttpStatusCodes.OK).json(result))
                .catch(error => response.status(HttpStatusCodes.CLIENT_ERROR));
        });

        this.router.get('/search/:customerName', (request, response) => {
            let searchString = request.params.customerName;

            this.customerService.getCustomersByName(searchString)
                .then(result => response.status(HttpStatusCodes.OK).json(result))
                .catch(error => response.status(HttpStatusCodes.CLIENT_ERROR));
        });

        this.router.post('/', (request, response) => {
            let customer = request.body;

            customer.__proto__ = new InternetCustomer;

            this.customerService.addNewCustomer(customer)
                .then(result => {
                    this.socketServer.emit(NEW_CUSTOMER_EVENT, result);
                    response.status(HttpStatusCodes.OK).json(result);
                })
                .catch(error => response.status(HttpStatusCodes.CLIENT_ERROR));
        });
    }

    get Router() {
        return this.router;
    }
}

export default CustomerRouting;
