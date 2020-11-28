import React from 'react'
import { View, Text, Button } from 'react-native'

const ReviewScreen = () => {
  return (
    <View>
      <Text>
        ReviewScreen
      </Text>
      <Text>
        ReviewScreen
      </Text>
      <Text>
        ReviewScreen
      </Text>
      <Text>
        ReviewScreen
      </Text>
      <Text>
        ReviewScreen
      </Text>
      <Text>
        ReviewScreen
      </Text>
    </View>
  )
}

ReviewScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <Button title="Settings" onPress={() => navigation.navigate('settings')} />
    ),
  };
};

export default ReviewScreen