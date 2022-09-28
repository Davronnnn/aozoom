import { SIGN_UP } from "../actionTypes";

const initialState = {
  access: "",
  refresh: "",
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        user: action.payload?.admin,
        access: action.payload?.token?.access,
      };
    default:
      return { ...state };
  }
};
