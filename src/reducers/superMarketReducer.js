import { UPDATE_QUANTITY } from "../actions/actionTypes";
import { productsArray } from "../utils/initialArray";

const initialState = {
  products: productsArray,
};

export const superMarketReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUANTITY:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
