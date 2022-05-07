import { getCookie } from "../../utils/cookies";
import { accessTokenKey } from "../../utils/constants";
import { postOrderRequest } from "../../utils/api";

export const POST_ORDER = "POST_ORDER";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const SHIFT_INGREDIENT = "SHIFT_INGREDIENT";

export function postOrder(ingredients) {
  return async function (dispatch) {
    dispatch({ type: POST_ORDER });
    try {
      const token = getCookie(accessTokenKey);
      const data = await postOrderRequest(ingredients, token);
      if (data?.success) {
        dispatch({ type: POST_ORDER_SUCCESS, data });
      } else {
        dispatch({ type: POST_ORDER_FAILED });
      }
    } catch (err) {
      dispatch({ type: POST_ORDER_FAILED });
    }
  };
}
