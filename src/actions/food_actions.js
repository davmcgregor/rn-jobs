import yelp from '../api/yelp';

import { FETCH_JOBS } from './types';

export const fetchJobs = (region) => async (dispatch) => {
  try {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        latitude: region.latitude,
        longitude: region.longitude,
        radius: 16000,
        term: 'restaurant',
      },
    });
    dispatch({ type: FETCH_JOBS, payload: response.data });
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
