"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGEX_LIST = exports.SELL_MARKET_ORDER_REGEX_PATTERN = exports.BUY_MARKET_ORDER_REGEX_PATTERN = void 0;
exports.BUY_MARKET_ORDER_REGEX_PATTERN = "^!BUY (.*) (([1-9])([0-9]*))( MKT)?$";
exports.SELL_MARKET_ORDER_REGEX_PATTERN = "^!SELL (.*) (([1-9])([0-9]*))( MKT)?$";
exports.REGEX_LIST = [
    exports.BUY_MARKET_ORDER_REGEX_PATTERN,
    exports.SELL_MARKET_ORDER_REGEX_PATTERN
];
//# sourceMappingURL=regex.js.map