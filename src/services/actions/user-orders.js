export const WS_USER_ORDERS_CONNECTION_START = "WS_USER_ORDERS_CONNECTION_START";
export const WS_USER_ORDERS_CONNECTION_SUCCESS = "WS_USER_ORDERS_CONNECTION_SUCCESS";
export const WS_USER_ORDERS_CONNECTION_ERROR = "WS_USER_ORDERS_CONNECTION_ERROR";
export const WS_USER_ORDERS_CONNECTION_CLOSED = "WS_USER_ORDERS_CONNECTION_CLOSED";
export const WS_USER_ORDERS_GET_ORDER = "WS_USER_ORDERS_GET_ORDER";

export const wsUserOrdersActions = {
  wsInit: WS_USER_ORDERS_CONNECTION_START,
  onOpen: WS_USER_ORDERS_CONNECTION_SUCCESS,
  onClose: WS_USER_ORDERS_CONNECTION_CLOSED,
  onError: WS_USER_ORDERS_CONNECTION_ERROR,
  onMessage: WS_USER_ORDERS_GET_ORDER,
};

export const wsUserOrdersConnectionStart = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_START,
  };
};

export const wsUserOrdersConnectionSuccess = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_SUCCESS,
  };
};

export const wsUserOrdersConnectionError = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_ERROR,
  };
};

export const wsUserOrdersConnectionClosed = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_CLOSED,
  };
};

export const wsUserOrdersGetOrder = (order) => {
  return {
    type: WS_USER_ORDERS_GET_ORDER,
    payload: order,
  };
};
