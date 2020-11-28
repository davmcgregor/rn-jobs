import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AuthScreen from './src/screens/AuthScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import MapScreen from './src/screens/MapScreen'
import DeckScreen from './src/screens/DeckScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import ReviewScreen from './src/screens/ReviewScreen'

const MainNavigator = createBottomTabNavigator({
  welcome: WelcomeScreen, 
  auth: AuthScreen ,
  main: createBottomTabNavigator({
    map: MapScreen,
    deck: DeckScreen,
    review: createStackNavigator({
      review: ReviewScreen,
      settings: SettingsScreen
    })
  })
})

const App = createAppContainer(MainNavigator);

export default () => {
  return (
    <App /> 
  );
}

