import { API, checkResponse } from '../../utils/api';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export function getIngredients() {
  return async function(dispatch) {
    dispatch({ type: GET_INGREDIENTS });
    try {
      const res = await fetch(`${API}/ingredients`);
      const { data } = await checkResponse(res, "application/json");
      dispatch({ type: GET_INGREDIENTS_SUCCESS, data });
    } catch(err) {
      dispatch({ type: GET_INGREDIENTS_FAILED });
    }
  }
}
