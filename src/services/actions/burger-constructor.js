import { API, checkResponse } from '../../utils/api';

export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SHIFT_INGREDIENT = 'SHIFT_INGREDIENT';

export function getOrder(ingredients) {
  return async function(dispatch) {
    dispatch({ type: GET_ORDER });
    try {
      const res = await fetch(`${API}/orders`, {
        method: 'POST',
        body: JSON.stringify({
          ingredients: [ingredients.bun, ...ingredients.main],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await checkResponse(res, "application/json");
      dispatch({ type: GET_ORDER_SUCCESS, data });
    } catch(err) {
      dispatch({ type: GET_ORDER_FAILED });
    }
  }
}
