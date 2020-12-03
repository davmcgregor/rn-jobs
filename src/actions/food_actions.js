import yelp from '../api/yelp';
import { FETCH_FOOD, LIKE_FOOD, CLEAR_LIKED_FOOD } from './types';

export const fetchFood = ({ latitude, longitude }, callback) => async (
  dispatch
) => {
  try {
    const response = await yelp.get('/search', {
      params: {
        latitude,
        longitude,
        radius: 16000,
        limit: 10,
        term: 'restaurant',
      },
    });
    dispatch({ type: FETCH_FOOD, payload: response.data.businesses });
    callback();
  } catch (err) {
    console.error(err);
  }
};

export const likeFood = (food) => {
  return {
    payload: food,
    type: LIKE_FOOD,
  };
};

export const clearLikedFood = () => {
  return {
    type: CLEAR_LIKED_FOOD,
  };
};
