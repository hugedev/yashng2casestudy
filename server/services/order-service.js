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
const order_schema_1 = require("../schemas/order-schema");
class OrderService {
    getOrdersByCustomerId(customerId) {
        let promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let filteredOrders = yield order_schema_1.default.find({
                    customerId: customerId
                }).exec();
                resolve(filteredOrders);
            }
            catch (error) {
                reject(error);
            }
        }));
        return promise;
    }
}
exports.default = OrderService;
