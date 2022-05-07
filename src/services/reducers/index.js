import { combineReducers } from "redux";
import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../actions";
import { constructorReducer, orderReducer } from "./burger-constructor";
import { userReducer } from "./user";
import { registerFormReducer } from "./register";
import { loginFormReducer } from "./login";
import { forgotPasswordFormReducer } from "./forgot-password";
import { resetPasswordFormReducer } from "./reset-password";
import { allOrdersWsReducer } from "./all-orders";
import { userOrdersWsReducer } from "./user-orders";

const initialState = {
  loading: false,
  hasError: false,
  data: [],
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...initialState,
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: constructorReducer,
  order: orderReducer,
  user: userReducer,
  registerForm : registerFormReducer,
  loginForm : loginFormReducer,
  forgotPasswordForm: forgotPasswordFormReducer,
  resetPasswordForm: resetPasswordFormReducer,
  allOrders: allOrdersWsReducer,
  userOrders: userOrdersWsReducer
});
