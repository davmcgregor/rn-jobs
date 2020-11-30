import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

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
        initialRegion={{
          longitude: -122,
          latitude: 37,
          latitudeDelta: 0.04,
          longitudeDelta: 0.09,
        }}
      />
    </View>
  );
};

export default MapScreen;
