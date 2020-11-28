import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

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

