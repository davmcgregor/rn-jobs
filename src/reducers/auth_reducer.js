import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: payload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null };
    default:
      return state;
  }
}
