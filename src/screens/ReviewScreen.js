import React from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

const ReviewScreen = ({ likedFood }) => {
  const renderLikedFood = () => {
    return likedFood.map((foodItem) => {
      const {
        id,
        name,
        coordinates: { latitude, longitude },
        price,
        is_closed,
        url,
      } = foodItem;

      return (
        <Card key={id}>
          <Card.Title h4>{name}</Card.Title>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02,
              }}
            />
            <View style={styles.detailWrapper}>
              <Text>Price: {price}</Text>
              <Text>{is_closed ? 'Closed' : 'Open'}</Text>
            </View>
            <Button
              title='Eat Now!'
              backgroundColor='#03A9F4'
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  };

  return <ScrollView>{renderLikedFood()}</ScrollView>;
};

ReviewScreen.navigationOptions = {
  title: 'Review Jobs',
  tabBar: {
    icon: ({ tintColor }) => {
      return <Icon name='favorite' size={30} color={tintColor} />;
    },
  },
  header: ({ navigate }) => {
    return {
      right: (
        <Button
          title='Settings'
          onPress={() => navigate('settings')}
          backgroundColor='rgba(0,0,0,0)'
          color='rgba(0, 122, 255, 1)'
        />
      ),
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0,
      },
    };
  },
};

const styles = StyleSheet.create({
  italics: {
    fontStyle: 'italic',
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const mapStateToProps = (state) => ({
  likedFood: state.likes,
});

export default connect(mapStateToProps)(ReviewScreen);
