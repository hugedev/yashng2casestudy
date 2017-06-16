"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var InternetCustomer = (function (_super) {
    __extends(InternetCustomer, _super);
    function InternetCustomer(customerId, name, address, email, phoneNumber, credit, status, remarks, blogUrl) {
        var _this = _super.call(this, customerId, name, address, email, phoneNumber, credit, status, remarks) || this;
        _this.customerId = customerId;
        _this.name = name;
        _this.address = address;
        _this.email = email;
        _this.phoneNumber = phoneNumber;
        _this.credit = credit;
        _this.status = status;
        _this.remarks = remarks;
        _this.blogUrl = blogUrl;
        return _this;
    }
    InternetCustomer.prototype.toString = function () {
        return _super.prototype.toString.call(this).toUpperCase();
    };
    return InternetCustomer;
}(customer_1.default));
exports.default = InternetCustomer;
//# sourceMappingURL=internet-customer.js.map