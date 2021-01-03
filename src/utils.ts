import { POSITION_TYPES, ORDER_TYPES } from './constants'

export const isMktOrder = (order: Order) => {
  return order.orderType === ORDER_TYPES.MKT;
}