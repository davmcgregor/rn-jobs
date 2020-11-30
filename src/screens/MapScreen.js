import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import { fetchFood } from '../actions/food_actions';
import { connect } from 'react-redux';

const MapScreen = ({ fetchFood }) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const [region, setRegion] = useState({
    longitude: -122,
    latitude: 37,
    latitudeDelta: 0.04,
    longitudeDelta: 0.09,
  });

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
          onPress={() => fetchFood(region)}
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
