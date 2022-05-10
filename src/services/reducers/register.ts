import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_FORM_CLEAR_STATE,
  REGISTER_FORM__SET_VALUE,
} from "../actions/register";

const registerFormInitialValue = {
  data: {
    name: "",
    email: "",
    password: "",
  },
  loading: false,
  success: false,
  hasError: false,
};

export const registerFormReducer = (
  state = registerFormInitialValue,
  action
) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    }
    case REGISTER_FORM_CLEAR_STATE: {
      return {
        ...registerFormInitialValue,
      };
    }
    case REGISTER_FORM__SET_VALUE: {
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
