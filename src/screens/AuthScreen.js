import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { facebookLogin } from '../actions/auth_actions';

const AuthScreen = ({ navigation, token, facebookLogin }) => {
  const onAuthComplete = () => {
    if (token) {
      navigation.navigate('main', { screen: 'map' });
    }
  };

  useEffect(() => {
    facebookLogin();
    onAuthComplete();
  }, [token]);

  return null;
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { facebookLogin })(AuthScreen);
