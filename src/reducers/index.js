import { combineReducers } from 'redux';
import auth from './auth_reducer';
import food from './food_reducer';

export default combineReducers({
  auth,
  food,
});
