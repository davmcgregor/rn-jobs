import { LIKE_FOOD, CLEAR_LIKED_FOOD } from '../actions/types';

export default function (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_LIKED_FOOD:
      return [];
    case LIKE_FOOD:
      let index = state.findIndex((el) => el.id == payload.id);
      if (index == -1) return [...state, payload];
      return state;
    default:
      return state;
  }
}
