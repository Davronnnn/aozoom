import { ADD_TO_CARD, DELETE_ITEM } from "../actionTypes";

const initialState = {
  cart: [],
};

const addToCard = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return { ...state, cart: [...state.cart, action.payload] };
    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return { ...state };
  }
};

export default addToCard;
