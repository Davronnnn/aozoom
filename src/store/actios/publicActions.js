import { ADD_TO_CARD, DELETE_ITEM } from "../actionTypes";

export const addToCard = (payload) => {
  return {
    payload,
    type: ADD_TO_CARD,
  };
};

export const deleteItem = (payload) => {
  return {
    payload,
    type: DELETE_ITEM,
  };
};
