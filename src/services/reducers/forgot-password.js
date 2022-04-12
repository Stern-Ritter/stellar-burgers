import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_FORM_CLEAR_STATE,
  FORGOT_PASSWORD_FORM_SET_VALUE,
} from "../actions/forgot-password";

const forgotPasswordFormInitialState = {
  data: {
    email: "",
  },
  loading: false,
  success: false,
  hasError: false,
};

export const forgotPasswordFormReducer = (
  state = forgotPasswordFormInitialState,
  action
) => {
  switch (action.type) {
    case FORGOT_PASSWORD: {
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    }
    case FORGOT_PASSWORD_FORM_CLEAR_STATE: {
      return {
        ...forgotPasswordFormInitialState,
      };
    }
    case FORGOT_PASSWORD_FORM_SET_VALUE: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.field]: action.payload.value,
        },
      };
    }
    default: {
      return state;
    }
  }
};
