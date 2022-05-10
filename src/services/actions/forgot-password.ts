import { updatePasswordRequest } from "../../utils/api.ts";

export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const FORGOT_PASSWORD_FORM_CLEAR_STATE =
  "FORGOT_PASSWORD_FORM_CLEAR_STATE";
export const FORGOT_PASSWORD_FORM_SET_VALUE = "FORGOT_PASSWORD_FORM_SET_VALUE";

export function setForgotPasswordFormValue({ field, value }) {
  return {
    type: FORGOT_PASSWORD_FORM_SET_VALUE,
    payload: { field, value },
  };
}

export function forgotPassword(form) {
  return async function (dispatch) {
    dispatch({ type: FORGOT_PASSWORD });
    try {
      const data = await updatePasswordRequest(form);
      if (data?.success) {
        dispatch({ type: FORGOT_PASSWORD_SUCCESS });
        dispatch({ type: FORGOT_PASSWORD_FORM_CLEAR_STATE });
      } else {
        dispatch({ type: FORGOT_PASSWORD_FAILED });
      }
    } catch (err) {
      dispatch({ type: FORGOT_PASSWORD_FAILED });
    }
  };
}
