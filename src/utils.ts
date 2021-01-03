import { POSITION_TYPES, ORDER_TYPES } from './constants'
import { BUY_MARKET_ORDER_REGEX_PATTERN } from './regex'

export const isOrder = (message: string, orderRegexPattern: string) => {
  const regex = new RegExp(orderRegexPattern, 'g');
  return regex.test(message);
}

export const isMktOrder = (order: Order) => {
  return order.orderType === ORDER_TYPES.MKT;
}