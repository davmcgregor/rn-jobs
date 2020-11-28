import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Slides = ({ data, onComplete }) => {
  const renderLastSlide = (index) => {
    if (index === data.length - 1) {
      return (
        <View style={{ marginTop: 15 }}>
          <Button
            title='Onwards!'
            raised
            buttonStyle={styles.buttonStyle}
            onPress={onComplete}
          />
        </View>
      );
    }
  };

  const renderSlides = () => {
    return data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {renderLastSlide(index)}
        </View>
      );
    });
  };

  return (
    <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
      {renderSlides()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  slideText: {
    fontSize: 30,
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
  },
});

export default Slides;
