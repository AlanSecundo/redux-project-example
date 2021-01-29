import { UPDATE_QUANTITY } from "./actionTypes";

export const updateItem = value => ({
  type: UPDATE_QUANTITY,
  payload: value,
});
