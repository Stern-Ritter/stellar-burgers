export const WS_ALL_ORDERS_CONNECTION_START = "WS_ALL_ORDERS_CONNECTION_START";
export const WS_ALL_ORDERS_CONNECTION_SUCCESS = "WS_ALL_ORDERS_CONNECTION_SUCCESS";
export const WS_ALL_ORDERS_CONNECTION_ERROR = "WS_ALL_ORDERS_CONNECTION_ERROR";
export const WS_ALL_ORDERS_CONNECTION_CLOSED = "WS_ALL_ORDERS_CONNECTION_CLOSED";
export const WS_ALL_ORDERS_GET_ORDER = "WS_ALL_ORDERS_GET_ORDER";

export const wsAllOrdersActions = {
  wsInit: WS_ALL_ORDERS_CONNECTION_START,
  onOpen: WS_ALL_ORDERS_CONNECTION_SUCCESS,
  onClose: WS_ALL_ORDERS_CONNECTION_CLOSED,
  onError: WS_ALL_ORDERS_CONNECTION_ERROR,
  onMessage: WS_ALL_ORDERS_GET_ORDER,
};

export const wsAllOrdersConnectionStart = () => {
  return {
    type: WS_ALL_ORDERS_CONNECTION_START,
  };
};

export const wsAllOrdersConnectionSuccess = () => {
  return {
    type: WS_ALL_ORDERS_CONNECTION_SUCCESS,
  };
};

export const wsAllOrdersConnectionError = () => {
  return {
    type: WS_ALL_ORDERS_CONNECTION_ERROR,
  };
};

export const wsAllOrdersConnectionClosed = () => {
  return {
    type: WS_ALL_ORDERS_CONNECTION_CLOSED,
  };
};

export const wsAllOrdersWsGetOrder = (order) => {
  return {
    type: WS_ALL_ORDERS_GET_ORDER,
    payload: order,
  };
};
