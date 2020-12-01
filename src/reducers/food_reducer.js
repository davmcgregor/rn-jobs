import { FETCH_FOOD } from '../actions/types';

const initialState = {
  businesses: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_FOOD:
      return {
        ...state,
        businesses: [...state.businesses, payload],
      };
    default:
      return state;
  }
}
