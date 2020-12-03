import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedFood } from '../actions/food_actions';

const SettingsScreen = ({ clearLikedFood }) => {
  return (
    <View>
      <Button
        title='Reset Liked Jobs'
        large
        icon={{ name: 'delete-forever', color: '#ffffff' }}
        backgroundColor='#F44336'
        onPress={clearLikedFood}
      />
    </View>
  );
};

export default connect(null, { clearLikedFood })(SettingsScreen);
