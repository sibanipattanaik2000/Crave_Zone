import { Href, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Platform,
  StyleSheet,
  View
} from "react-native";

const { width } = Dimensions.get("window");

const Splash = () => {
  const router = useRouter();

  // Animation values
  const leftStripe = useRef(new Animated.Value(0)).current;
  const rightStripe = useRef(new Animated.Value(0)).current;

  const logoScale = useRef(new Animated.Value(0.4)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  // Glow starts visible → fades out at the end
  const glowOpacity = useRef(new Animated.Value(0)).current;
  const glowScale = useRef(new Animated.Value(0.8)).current;

  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleY = useRef(new Animated.Value(50)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.sequence([
      // 1. Stripes expand
      Animated.parallel([
        Animated.timing(leftStripe, { toValue: 1, duration: 1000, easing: Easing.out(Easing.cubic), useNativeDriver: false }),
        Animated.timing(rightStripe, { toValue: 1, duration: 1000, easing: Easing.out(Easing.cubic), useNativeDriver: false }),
      ]),

      // 2. Logo + Glow appear together
      Animated.parallel([
        Animated.spring(logoScale, { toValue: 1, friction: 8, tension: 60, useNativeDriver: true }),
        Animated.timing(logoOpacity, { toValue: 1, duration: 700, useNativeDriver: true }),
        Animated.timing(glowOpacity, { toValue: 0.6, duration: 600, useNativeDriver: true }),
        Animated.spring(glowScale, { toValue: 1.4, friction: 10, useNativeDriver: true }),
      ]),

      // 3. Text enters
      Animated.delay(200),
      Animated.stagger(200, [
        Animated.parallel([
          Animated.timing(titleOpacity, { toValue: 1, duration: 700, useNativeDriver: true }),
          Animated.timing(titleY, { toValue: 0, duration: 800, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(subtitleOpacity, { toValue: 1, duration: 800, useNativeDriver: true }),
          Animated.timing(subtitleY, { toValue: 0, duration: 900, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        ]),
      ]),

      // 4. Glow gracefully fades OUT while logo stays
      Animated.timing(glowOpacity, {
        toValue: 0,
        duration: 1200,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),

    ]).start(() => {
      setTimeout(() => {
        router.push("/auth/login" as Href);
      }, 600);
    });
  }, []);

  const leftWidth = leftStripe.interpolate({ inputRange: [0, 1], outputRange: [0, width * 0.20] });
  const rightWidth = rightStripe.interpolate({ inputRange: [0, 1], outputRange: [0, width * 0.20] });

  return (
    <View style={styles.container}>
      {/* Left Stripe */}
      <Animated.View style={[styles.sideStripe, styles.leftStripe, { width: leftWidth }]} />

      {/* Right Stripe */}
      <Animated.View style={[styles.sideStripe, styles.rightStripe, { width: rightWidth }]} />

      {/* Center Content */}
      <View style={styles.centerContent}>
        {/* Logo Container */}
        <View style={styles.logoContainer}>
          {/* Glowing circle (appears then vanishes) */}
          <Animated.View
            style={[
              styles.glowCircle,
              {
                opacity: glowOpacity,
                transform: [{ scale: glowScale }],
              },
            ]}
          />

          {/* Actual Logo (stays forever) */}
          <Animated.Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/857/857681.png" }}
            style={[
              styles.logo,
              {
                opacity: logoOpacity,
                transform: [{ scale: logoScale }],
              },
            ]}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Animated.Text style={[styles.title, { opacity: titleOpacity, transform: [{ translateY: titleY }] }]}>
          CraveZone
        </Animated.Text>

        {/* Subtitle */}
        <Animated.Text style={[styles.subtitle, { opacity: subtitleOpacity, transform: [{ translateY: subtitleY }] }]}>
          Taste Delivered Fresh
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sideStripe: {
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: "#FF6F00",
    zIndex: 1,
  },
  leftStripe: { left: 0 },
  rightStripe: { right: 0 },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  logoContainer: {
    position: "relative",
    width: Platform.OS === "web" ? 180 : 150,
    height: Platform.OS === "web" ? 180 : 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  glowCircle: {
    position: "absolute",
    width: Platform.OS === "web" ? 240 : 150,
    height: Platform.OS === "web" ? 240 : 150,
    borderRadius: 120,
    backgroundColor: "#FF8A65",
    opacity: 0,
  },
  logo: {
    width: Platform.OS === "web" ? 180 : 130,
    height: Platform.OS === "web" ? 180 : 130,
    zIndex: 2,
  },
  title: {
    fontSize: Platform.OS === "web" ? 58 : 40,
    fontWeight: "800",
    color: "#FF6F00",
    letterSpacing: 1.2,
    marginTop: 32,
    textAlign: "center",
  },
  subtitle: {
    fontSize: Platform.OS === "web" ? 21 : 16,
    color: "#FF7A2A",
    marginTop: 12,
    fontWeight: "600",
    letterSpacing: 0.8,
    textAlign: "center",
  },
});

export default Splash;