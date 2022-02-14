import {
  GET_ORDER,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
} from "../actions/burger-constructor";

const constructorInitialState = {
  bun: "60d3b41abdacab0026a733c6",
  main: [
    "60d3b41abdacab0026a733c8",
    "60d3b41abdacab0026a733c9",
    "60d3b41abdacab0026a733ca",
    "60d3b41abdacab0026a733cb",
    "60d3b41abdacab0026a733cc",
    "60d3b41abdacab0026a733cd",
    "60d3b41abdacab0026a733d0",
    "60d3b41abdacab0026a733d1",
    "60d3b41abdacab0026a733d3",
    "60d3b41abdacab0026a733d4",
  ],
};

const orderInitialState = {
  loading: false,
  hasError: false,
  data: null,
};

export const constructorReducer = (state = constructorInitialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.ingredient.type === "bun") {
        return {
          ...state,
          bun: action.ingredient._id,
        };
      } else {
        return {
          ...state,
          main: [...state.main, action.ingredient._id],
        };
      }
    }
    default: {
      return state;
    }
  }
};

export const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case GET_ORDER: {
      return {
        ...state,
        loading: true,
        hasError: false,
        data: null,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};
