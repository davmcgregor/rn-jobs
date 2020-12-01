import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Card } from 'react-native-elements';
import { likeFood } from '../actions/food_actions';
import Swipe from '../components/Swipe';

const DeckScreen = ({ food, likeFood }) => {
  const renderCard = (foodItem) => {
    return (
      <Card key={foodItem.id}>
        <Card.Title h4>{foodItem.name}</Card.Title>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={true}
            initialRegion={{
              latitude: foodItem.coordinates.latitude,
              longitude: foodItem.coordinates.longitude,
              latitudeDelta: 0.045,
              longitudeDelta: 0.02,
            }}
          ></MapView>
        </View>
        <Card.Divider />
        <View style={styles.detailWrapper}>
          <Text>Price: {foodItem.price}</Text>
          <Text>{foodItem.is_closed ? 'Closed' : 'Open'}</Text>
        </View>
        <FlatList
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          data={foodItem.categories}
          horizontal={true}
          scrollEnabled={false}
          keyExtractor={(item) => item.title}
          renderItem={({ item, index }) => {
            return (
              <Text>
                {item.title}
                {index === foodItem.categories.length - 1 ? '' : ', '}
              </Text>
            );
          }}
        />
      </Card>
    );
  };

  const renderNoMoreCards = () => {
    return (
      <Card>
        <Card.Title h3>No results!</Card.Title>
        <Card.Divider />
        <Text style={{ marginVertical: 10 }}>There is no food here!</Text>
      </Card>
    );
  };

  const onSwipeLeft = (item) => {
    return console.log('left', item);
  };

  return (
    <View>
      <Swipe
        data={food[0]}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={(food) => likeFood(food)}
        keyProp='id'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({
  food: state.food.businesses,
});

export default connect(mapStateToProps, { likeFood })(DeckScreen);
