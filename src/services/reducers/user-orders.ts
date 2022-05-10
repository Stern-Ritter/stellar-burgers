import {
  WS_USER_ORDERS_CONNECTION_SUCCESS,
  WS_USER_ORDERS_CONNECTION_ERROR,
  WS_USER_ORDERS_CONNECTION_CLOSED,
  WS_USER_ORDERS_GET_ORDER,
} from "../actions/user-orders";

const userOrdersInitialState = {
  wsConnected: false,
  error: undefined,
  orders: [],
};

export const userOrdersWsReducer = (state = userOrdersInitialState, action) => {
  switch (action.type) {
    case WS_USER_ORDERS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnected: true,
        error: undefined,
      };
    }
    case WS_USER_ORDERS_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false,
        error: action.payload,
      };
    }
    case WS_USER_ORDERS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnected: false,
        error: undefined,
      };
    }
    case WS_USER_ORDERS_GET_ORDER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
