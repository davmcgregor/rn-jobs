import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Icon } from 'react-native-elements';

import { Provider } from 'react-redux';
import {store, persistor} from './src/store';
import { PersistGate } from 'redux-persist/integration/react'

import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();
const AppReview = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Review Food'
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
    <Main.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-o';
          } else if (route.name === 'Food') {
            iconName = 'search';
          } else if (route.name === 'Review') {
            iconName = 'heart';
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: { height: '12%' },
        labelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Main.Screen name='Map' component={MapScreen} />
      <Main.Screen name='Food' component={DeckScreen} />
      <Main.Screen name='Review' component={AppReview} />
    </Main.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ tabBarVisible: false }}>
            <Tab.Screen name='welcome' component={WelcomeScreen} />
            <Tab.Screen name='auth' component={AuthScreen} />
            <Tab.Screen name='main' component={AppMain} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
