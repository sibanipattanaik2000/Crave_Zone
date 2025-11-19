import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Animated, StyleSheet, useWindowDimensions } from 'react-native';

const foodImages = [
  'https://cdn-icons-png.flaticon.com/512/3595/3595455.png',
  'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
  'https://cdn-icons-png.flaticon.com/512/857/857681.png',
  'https://cdn-icons-png.flaticon.com/512/706/706164.png',
  'https://cdn-icons-png.flaticon.com/512/3459/3459154.png',
];

const FoodImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
  const isMobile = width < 540;
  useEffect(() => {
    const fadeInOut = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCurrentIndex((prev) => (prev + 1) % foodImages.length);
      });
    };

    fadeInOut();
  }, [currentIndex]);
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width:isMobile?200: 350,
    height: isMobile?200:350,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF6B00',
  },
});
  return (
    <View style={styles.container}>
      <Animated.Image
        key={currentIndex}
        source={{ uri: foodImages[currentIndex] }}
        style={[styles.image, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
      <View style={styles.dotsContainer}>
        {foodImages.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              currentIndex === i && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default FoodImageSlider;


