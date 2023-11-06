import { all_the_selected_services } from "./Constants";

const initial_state = [];

export const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case all_the_selected_services:
      return action.data;

    default:
      return state;
  }
};