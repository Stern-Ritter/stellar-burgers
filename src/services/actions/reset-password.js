import { resetPasswordRequest } from "../../utils/api";

export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const RESET_PASSWORD_FORM_CLEAR_STATE = "RESET_PASSWORD_FORM_CLEAR_STATE";
export const RESET_PASSWORD_FORM_SET_VALUE = "RESET_PASSWORD_FORM_SET_VALUE";

export function setResetPasswordFormValue({ field, value }) {
  return {
    type: RESET_PASSWORD_FORM_SET_VALUE,
    payload: { field, value },
  };
}

export function resetPassword(form) {
  return async function (dispatch) {
    dispatch({ type: RESET_PASSWORD });
    try {
      const data = await resetPasswordRequest(form);
      if (data?.success) {
        dispatch({ type: RESET_PASSWORD_SUCCESS });
        dispatch({ type: RESET_PASSWORD_FORM_CLEAR_STATE });
      } else {
        dispatch({ type: RESET_PASSWORD_FAILED });
      }
    } catch (err) {
      dispatch({ type: RESET_PASSWORD_FAILED });
    }
  };
}
