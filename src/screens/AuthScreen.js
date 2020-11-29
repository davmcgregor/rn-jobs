import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { facebookLogin } from '../actions/auth_actions';

const AuthScreen = ({ facebookLogin }) => {
  useEffect(() => {
    facebookLogin();
  }, []);

  return null;
};

export default connect(null, { facebookLogin })(AuthScreen);
