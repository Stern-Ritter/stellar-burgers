import { refreshTokenRequest, logoutRequest } from "../../utils/api";
import { setCookie, deleteCookie } from "../../utils/cookies";
import {
  getStorageItem,
  setStorageItem,
  removeStorageItem,
} from "../../utils/storage";
import {
  accessTokenKey,
  refreshTokenKey,
  cookieExpires,
} from "../../utils/constants";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const LOGOUT = "LOGOUT";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export async function refreshToken() {
  const token = getStorageItem(refreshTokenKey);
  const data = await refreshTokenRequest(token);
  if (data?.success && data?.accessToken && data?.refreshToken) {
    const accessToken = data.accessToken.split("Bearer ")[1];
    const refreshToken = data.refreshToken;
    setCookie(accessTokenKey, accessToken, { expires: cookieExpires });
    setStorageItem(refreshTokenKey, refreshToken);
    return true;
  } else {
    return false;
  }
}

export function logout(history) {
  return async function (dispatch) {
    dispatch({ type: LOGOUT });
    try {
      const token = getStorageItem(refreshTokenKey);
      const data = await logoutRequest(token);
      if (data?.success) {
        deleteCookie(accessTokenKey);
        removeStorageItem(refreshTokenKey);
        history.replace({ pathname: "/" });
      } else {
        dispatch({ type: LOGOUT_FAILED });
      }
    } catch (err) {
      dispatch({ type: LOGOUT_FAILED });
    }
  };
}
