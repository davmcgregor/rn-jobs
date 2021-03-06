import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const Swipe = ({
  data,
  renderCard,
  renderNoMoreCards,
  keyProp,
  onSwipeRight,
  onSwipeLeft,
}) => {
  const position = useRef(new Animated.ValueXY()).current;
  const [index, setIndex] = useState(0);
  const refIndex = useRef(index);

  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
  LayoutAnimation.spring();

  useEffect(() => {
    setIndex(0);
  }, [data]);

  useEffect(() => {
    refIndex.current = index;
  });

  const onSwipeComplete = (direction) => {
    const item = data[refIndex.current];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    position.setValue({ x: 0, y: 0 });
    setIndex((prevIndex) => prevIndex + 1);
  };

  const forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH * 1.1 : -SCREEN_WIDTH * 1.1;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: true,
    }).start(() => onSwipeComplete(direction));
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      friction: 6,
      useNativeDriver: true,
    }).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, { dx, dy }) => {
        position.setValue({ x: dx, y: dy });
      },
      onPanResponderRelease: (evt, { dx }) => {
        if (dx > SWIPE_THRESHOLD) {
          forceSwipe('right');
        } else if (dx < -SWIPE_THRESHOLD) {
          forceSwipe('left');
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });

    return {
      transform: [
        { translateX: position.x },
        { translateY: position.y },
        { rotate },
      ],
    };
  };

  const renderCards = () => {
    if (index >= data.length) {
      return renderNoMoreCards();
    }

    const deck = data.map((item, i) => {
      if (i < index) return null;

      if (i === index) {
        return (
          <Animated.View
            key={item[keyProp] || item.id}
            style={[getCardStyle(), styles.cardStyle]}
            {...panResponder.panHandlers}
          >
            {renderCard(item)}
          </Animated.View>
        );
      }
      return (
        <Animated.View
          key={item.id}
          style={[styles.cardStyle, { top: 10 * (i - index), zIndex: -i }]}
        >
          {renderCard(item)}
        </Animated.View>
      );
    });

    return Platform.OS === 'android' ? deck : deck.reverse();
  };

  return <View style={{ marginTop: 45 }}>{renderCards()}</View>;
};

const styles = StyleSheet.create({
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
});

export default Swipe;
