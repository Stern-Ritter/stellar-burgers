import {
  SET_SELECTED_INGREDIENT,
  REMOVE_SELECTED_INGREDIENT,
} from "../actions/burger-ingredients";

export const currentIngredientReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_INGREDIENT: {
      return action.ingredient;
    }
    case REMOVE_SELECTED_INGREDIENT: {
      return null;
    }
    default: {
      return state;
    }
  }
};
