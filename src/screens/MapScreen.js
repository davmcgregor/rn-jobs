import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import { fetchFood } from '../actions/food_actions';
import { connect } from 'react-redux';

const MapScreen = ({ navigation, fetchFood }) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const [region, setRegion] = useState({
    // san jose
    // longitude: -121.867905,
    // latitude: 37.279518,
    // london
    longitude: -0.101314,
    latitude: 51.529158,
    latitudeDelta: 0.04,
    longitudeDelta: 0.09,
  });

  const onButtonPress = () => {
    fetchFood(region, () => {
      navigation.navigate('Deck');
    });
  };

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  if (!mapLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size='small' color='#0000ff' />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        onRegionChangeComplete={(region) => {
          setRegion(region);
        }}
      />
      <View style={styles.buttonContainer}>
        <Button
          icon={<Icon name='search' size={15} color='white' />}
          title=' Search This Area'
          onPress={onButtonPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
});

export default connect(null, { fetchFood })(MapScreen);
