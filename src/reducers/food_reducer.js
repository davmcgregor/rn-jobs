import { FETCH_FOOD } from '../actions/types';

const initialState = {
  results: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_FOOD:
      return payload;
    default:
      return state;
  }
}
