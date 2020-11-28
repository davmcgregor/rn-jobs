import React from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp' },
  { text: 'Use this to get a job' },
  { text: 'Set your location, then swipe away' },
];

const WelcomeScreen = () => {
  return <Slides data={SLIDE_DATA} />;
};

export default WelcomeScreen;
