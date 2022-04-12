import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_FORM_CLEAR_STATE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "../actions/user";

const userInitialState = {
  data: {
    name: "",
    email: "",
  },

  form: {
    name: "",
    email: "",
  },

  getUserRequest: false,
  getUserRequestSuccess: false,
  getUserRequestFailed: false,

  updateUserRequest: false,
  updateUserRequestSuccess: false,
  updateUserRequestFailed: false,

  logoutRequest: false,
  logoutRequestFailed: false,
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        getUserRequest: true,
        getUserRequestSuccess: false,
        getUserRequestFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        getUserRequestSuccess: true,
        data: {
          ...action.payload,
        },
        form: {
          ...action.payload,
        },
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserRequestFailed: true,
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserRequestSuccess: false,
        updateUserRequestFailed: false,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserRequestSuccess: true,
        data: {
          ...action.payload,
        },
        form: {
          ...action.payload,
        },
      };
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserRequestFailed: true,
      };
    }
    case UPDATE_USER_FORM_CLEAR_STATE: {
      return {
        ...state,
        form: {
          ...state.data,
        },
      };
    }
    case LOGOUT: {
      return {
        ...state,
        logoutRequest: true,
        logoutRequestSuccess: false,
        logoutRequestFailed: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...userInitialState,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutRequestFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
