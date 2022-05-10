import { loginRequest } from "../../utils/api.ts";
import { setCookie, deleteCookie } from "../../utils/cookies";
import { setStorageItem } from "../../utils/storage";
import {
  accessTokenKey,
  refreshTokenKey,
} from "../../utils/constants";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGIN_FORM_CLEAR_STATE = "LOGIN_FORM_CLEAR_STATE";
export const LOGIN_FORM__SET_VALUE = "LOGIN_FORM__SET_VALUE";

export function setLoginFormValue({ field, value }) {
  return {
    type: LOGIN_FORM__SET_VALUE,
    payload: { field, value },
  };
}

export function login(form) {
  return async function (dispatch) {
    dispatch({ type: LOGIN });
    try {
      const data = await loginRequest(form);

      if (data?.success && data?.accessToken && data?.refreshToken) {
        const accessToken = data.accessToken.split("Bearer ")[1];
        const refreshToken = data.refreshToken;
        deleteCookie(accessTokenKey);
        setCookie(accessTokenKey, accessToken);
        setStorageItem(refreshTokenKey, refreshToken);

        dispatch({ type: LOGIN_SUCCESS });
        dispatch({ type: LOGIN_FORM_CLEAR_STATE });
      } else {
        dispatch({ type: LOGIN_FAILED });
      }
    } catch (err) {
      dispatch({ type: LOGIN_FAILED });
    }
  };
}
