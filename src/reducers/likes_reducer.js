import { LIKE_FOOD } from '../actions/types';

export default function (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case LIKE_FOOD:
      let index = state.findIndex((el) => el.id == payload.id);
      if (index == -1) return [...state, payload];
      return state;
    default:
      return state;
  }
}
