import CustomTextInput from "@/component/CustomTextInput";
import FoodImageSlider from "@/component/FoodImageSlider";
import { Href, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState<{ email?: string; password?: string }>({});
  const { width } = useWindowDimensions();
  const isMobile = width < 540;

  const handleLogin = () => {
    let isValid = true;
    let newError: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newError.email = "Please enter your email address";
      isValid = false;
    }
    if (!password.trim()) {
      newError.password = "Please enter your password";
      isValid = false;
    }

    setError(newError);

    if (isValid) {
      router.replace("/tabs/home" as Href);
    }
  };

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: "#FFF7F0",
    },
    container: {
      flex: 1,
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: isMobile ? "flex-start" : "center",
      paddingHorizontal: isMobile ? 10 : 40,
      paddingTop: isMobile ? 40 : 0,
      paddingBottom: isMobile ? 30 : 0,
    },
    leftContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: isMobile ? "100%" : "65%",
      marginBottom: isMobile ? 30 : 0,
    },
    formContainer: {
      backgroundColor: "#fff",
      padding: isMobile ? 20 : 40,
      borderRadius: 24,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 5,
      alignSelf: "center",
      width: isMobile ? "95%" : "30%",
      marginTop: isMobile ? 10 : 0,
    },
    title: {
      fontSize: isMobile ? 14 : 18,
      color: "#555",
      fontWeight: "500",
      textAlign: "center",
    },
    brand: {
      fontSize: isMobile ? 22 : 32,
      color: "#FF6B00",
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 5,
    },
    subtitle: {
      fontSize: 14,
      color: "#888",
      textAlign: "center",
      marginBottom: 30,
    },
    button: {
      backgroundColor: "#FF6B00",
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: "center",
      marginTop: 10,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
    },
    forgotText: {
      color: "#FF6B00",
      textAlign: "center",
      marginTop: 15,
      fontWeight: "500",
    },
    signupText: {
      textAlign: "center",
      color: "#555",
      marginTop: isMobile ? 15 : 25,
    },
    link: {
      color: "#FF6B00",
      fontWeight: "600",
    },
    errorText: {
      color: "red",
      fontSize: 13,
      marginTop: -10,
      marginBottom: 12,
      marginLeft: 4,
    },
  });

  return (
    <ScrollView
      style={styles.mainWrapper}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* Top Image Section (or Left on Web) */}
        <View style={styles.leftContainer}>
          <FoodImageSlider />
        </View>

        {/* Bottom Box (or Right on Web) */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Welcome Back to</Text>
          <Text style={styles.brand}>CraveZone 🍴</Text>
          <Text style={styles.subtitle}>
            Log in to explore delicious recipes
          </Text>

          {/* Email Input */}
          <CustomTextInput
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (error.email)
                setError((prev) => ({ ...prev, email: undefined }));
            }}
            keyboardType="email-address"
            iconName="mail-outline"
          />
          {error.email && <Text style={styles.errorText}>{error.email}</Text>}

          {/* Password Input */}
          <CustomTextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (error.password)
                setError((prev) => ({ ...prev, password: undefined }));
            }}
            secureTextEntry
            iconName="lock-closed-outline"
          />
          {error.password && (
            <Text style={styles.errorText}>{error.password}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/auth/forgot-password")}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 5,
            }}
          >
            <Text> Don’t have an account? </Text>
            <TouchableOpacity
              onPress={() => router.push("/auth/signup" as Href)}
            >
              <Text style={styles.link}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
