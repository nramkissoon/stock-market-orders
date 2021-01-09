export const BUY_MARKET_ORDER_REGEX_PATTERN = "^!BUY (.*) (([1-9])([0-9]*))( MKT)?$";
export const SELL_MARKET_ORDER_REGEX_PATTERN = "^!SELL (.*) (([1-9])([0-9]*))( MKT)?$";

export const REGEX_LIST = [
  BUY_MARKET_ORDER_REGEX_PATTERN,
  SELL_MARKET_ORDER_REGEX_PATTERN
]