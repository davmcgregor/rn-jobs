import yelp from '../api/yelp';
import { FETCH_JOBS } from './types';

export const fetchFood = ({ latitude, longitude }) => async (dispatch) => {
  try {
    const response = await yelp.get('/search', {
      params: {
        latitude,
        longitude,
        radius: 16000,
        limit: 50,
        term: 'restaurant',
      },
    });
    console.log('hi');

    dispatch({ type: FETCH_JOBS, payload: response.data });
    console.log(response.data.total);
  } catch (err) {
    console.error(err);
  }
};
