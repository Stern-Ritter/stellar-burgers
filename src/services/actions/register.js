import { registerRequest } from "../../utils/api";
import { setCookie } from "../../utils/cookies";
import { setStorageItem } from "../../utils/storage";
import { accessTokenKey, refreshTokenKey } from "../../utils/constants";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const REGISTER_FORM_CLEAR_STATE = "REGISTER_FORM_CLEAR_STATE";
export const REGISTER_FORM__SET_VALUE = "REGISTER_FORM__SET_VALUE";

export function setRegisterFormValue({ field, value }) {
  return {
    type: REGISTER_FORM__SET_VALUE,
    payload: { field, value },
  };
}

export function register(form) {
  return async function (dispatch) {
    dispatch({ type: REGISTER });
    try {
      const data = await registerRequest(form);
      
      if (data?.success && data?.accessToken && data?.refreshToken) {
        const accessToken = data.accessToken.split("Bearer ")[1];
        const refreshToken = data.refreshToken;
        setCookie(accessTokenKey, accessToken);
        setStorageItem(refreshTokenKey, refreshToken);

        dispatch({ type: REGISTER_SUCCESS });
        dispatch({ type: REGISTER_FORM_CLEAR_STATE });
      } else {
        dispatch({ type: REGISTER_FAILED });
      }
    } catch (err) {
      dispatch({ type: REGISTER_FAILED });
    }
  };
}
