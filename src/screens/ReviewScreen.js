import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

const ReviewScreen = () => {
  return (
    <View>
      <Text>ReviewScreen</Text>
      <Text>ReviewScreen</Text>
      <Text>ReviewScreen</Text>
      <Text>ReviewScreen</Text>
      <Text>ReviewScreen</Text>
      <Text>ReviewScreen</Text>
    </View>
  );
};

ReviewScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Review Jobs',
    headerRight: () => (
      <Button
        title='Settings'
        type='clear'
        onPress={() => navigation.navigate('settings')}
      />
    ),
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0,
    },
  };
};

export default ReviewScreen;
