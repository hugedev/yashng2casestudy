"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_status_codes_1 = require("../utilities/http-status-codes");
const order_service_1 = require("../services/order-service");
class OrderRouting {
    constructor() {
        this.orderService = new order_service_1.default();
        this.router = express.Router();
        this.initializeRouting();
    }
    initializeRouting() {
        this.router.get('/:customerId', (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                let parsedCustomerId = parseInt(request.params.customerId);
                let orders = yield this.orderService.getOrdersByCustomerId(parsedCustomerId);
                response.status(http_status_codes_1.default.OK).json(orders);
            }
            catch (error) {
                response.status(http_status_codes_1.default.SERVER_ERROR).json(error);
            }
        }));
    }
    get Router() {
        return this.router;
    }
}
exports.default = OrderRouting;
