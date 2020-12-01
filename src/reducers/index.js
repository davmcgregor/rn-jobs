import { combineReducers } from 'redux';
import auth from './auth_reducer';
import food from './food_reducer';
import likes from './likes_reducer';

export default combineReducers({
  auth,
  food,
  likes,
});
