import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-elements';

import { Provider } from 'react-redux';
import store from './src/store';

import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ReviewScreen from './src/screens/ReviewScreen';

const Stack = createStackNavigator();
const AppReview = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Review Jobs'
        component={ReviewScreen}
        options={({ navigation }) => ({
          headerStyle: {
            marginTop: Platform.OS === 'android' ? 24 : 0,
          },
          headerRight: () => (
            <Button
              title='Settings'
              type='clear'
              onPress={() => navigation.navigate('settings')}
            />
          ),
        })}
      />
      <Stack.Screen name='settings' component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const Main = createBottomTabNavigator();
const AppMain = () => {
  return (
    <Main.Navigator>
      <Main.Screen name='map' component={MapScreen} />
      <Main.Screen name='deck' component={DeckScreen} />
      <Main.Screen name='review' component={AppReview} />
    </Main.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarVisible: false }}>
          <Tab.Screen name='welcome' component={WelcomeScreen} />
          <Tab.Screen name='auth' component={AuthScreen} />
          <Tab.Screen name='main' component={AppMain} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
