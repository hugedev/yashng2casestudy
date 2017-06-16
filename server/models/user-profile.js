"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var object_formatter_1 = require("../utilities/object-formatter");
var UserProfile = (function () {
    function UserProfile(userId, password, email, department, title) {
        this.userId = userId;
        this.password = password;
        this.email = email;
        this.department = department;
        this.title = title;
    }
    UserProfile.prototype.toString = function () {
        return object_formatter_1.default.format(this);
    };
    return UserProfile;
}());
exports.default = UserProfile;
//# sourceMappingURL=user-profile.js.map