import { Href, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Splash = () => {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 3,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      // After animation, go to Login
      router.push("/auth/login" as Href);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/857/857681.png", // 🍔 replace with your CraveZone logo
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>CraveZone</Text>
      <Text style={styles.subtitle}>Taste Delivered Fresh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6F00", // warm food orange theme
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: Platform.OS === "web" ? 200 : 150,
    height: Platform.OS === "web" ? 200 : 150,
    marginBottom: 20,
  },
  title: {
    fontSize: Platform.OS === "web" ? 48 : 36,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: Platform.OS === "web" ? 20 : 16,
    color: "#fff",
    marginTop: 8,
    opacity: 0.8,
  },
});

export default Splash;
