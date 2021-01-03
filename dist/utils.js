"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMktOrder = exports.isOrder = void 0;
const constants_1 = require("./constants");
const isOrder = (message, orderRegexPattern) => {
    const regex = new RegExp(orderRegexPattern, 'g');
    return regex.test(message);
};
exports.isOrder = isOrder;
const isMktOrder = (order) => {
    return order.orderType === constants_1.ORDER_TYPES.MKT;
};
exports.isMktOrder = isMktOrder;
//# sourceMappingURL=utils.js.map