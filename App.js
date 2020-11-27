import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'

  
const MainNavigator = createBottomTabNavigator({
  welcome: WelcomeScreen, 
  auth: AuthScreen
})

const App = createAppContainer(MainNavigator);

export default () => {

  return (
    <App />
  );
}

