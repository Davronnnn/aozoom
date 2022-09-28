import { SIGN_UP } from "../actionTypes";

export const signUpAction = (payload) => {
  return {
    payload,
    type: SIGN_UP,
  };
};
