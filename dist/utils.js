"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMktOrder = void 0;
const constants_1 = require("./constants");
const isMktOrder = (order) => {
    return order.orderType === constants_1.ORDER_TYPES.MKT;
};
exports.isMktOrder = isMktOrder;
//# sourceMappingURL=utils.js.map