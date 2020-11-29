import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' },
];

const WelcomeScreen = ({ navigation }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      let getToken = await AsyncStorage.getItem('fb_token');
      if (getToken) {
        navigation.navigate('main', { screen: 'map' });
        setToken(getToken);
      } else {
        setToken(false);
      }
    }
    fetchToken();
  });

  const onSlidesComplete = () => {
    navigation.navigate('auth');
  };

  if (token === null) {
    return <AppLoading />;
  }

  return <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />;
};

export default WelcomeScreen;
