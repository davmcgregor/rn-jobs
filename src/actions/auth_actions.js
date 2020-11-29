import AsyncStorage from '@react-native-async-storage/async-storage';

import { FACEBOOK_LOGIN_SUCCESS } from './types';

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // dispatch({ type: 'signin', payload: token });
    // navigate('TrackList');
  } else {
    // navigate('Signup');
  }

}