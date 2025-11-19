import CustomTextInput from "@/component/CustomTextInput";
import FoodImageSlider from "@/component/FoodImageSlider";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  useWindowDimensions,
} from "react-native";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 540;

  const [error, setError] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const handleSignup = () => {
    let newError: any = {};
    let isValid = true;
    if (!name.trim()) {
      newError.name = "Please enter your name";
      isValid = false;
    }
    if (!email.trim()) {
      newError.email = "Please enter your email";
      isValid = false;
    }
    if (!password.trim()) {
      newError.password = "Please enter a password";
      isValid = false;
    } else if (password.length < 6) {
      newError.password = "Password must be at least 6 characters";
      isValid = false;
    }
    if (!confirmPassword.trim()) {
      newError.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (confirmPassword !== password) {
      newError.confirmPassword = "Passwords do not match";
      isValid = false;
    }
    setError(newError);
    setTimeout(() => {
      Alert.alert("Signup Successful", "Your account has been created!", [
        {
          text: "OK",
          onPress: () => router.push("/auth/login"),
        },
      ]);
    }, 100);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: isMobile ? "column" : "row",
      backgroundColor: "#FFF7F0",
      paddingHorizontal: isMobile ? 15 : 40,
      paddingTop: isMobile ? 20 : 0,
    },

    formScroll: {
      flexGrow: 1,
      paddingBottom: 30,
    },

    formContainer: {
      width: "100%",
      backgroundColor: "#fff",
      padding: isMobile ? 20 : 40,
      borderRadius: 24,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 5,
      alignSelf: "center",
      marginTop: isMobile ? 20 : 0, // for spacing under slider on mobile
    },

    title: {
      fontSize: 18,
      color: "#555",
      fontWeight: "500",
      textAlign: "center",
    },

    brand: {
      fontSize: 32,
      color: "#FF6B00",
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 5,
    },

    subtitle: {
      fontSize: 14,
      color: "#888",
      textAlign: "center",
      marginBottom: 25,
    },

    errorText: {
      color: "red",
      fontSize: 13,
      marginTop: -10,
      marginBottom: 12,
      marginLeft: 4,
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

    loginText: {
      textAlign: "center",
      color: "#555",
      marginTop: 25,
    },

    link: {
      color: "#FF6B00",
      fontWeight: "600",
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.formScroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Join the Flavourful World of</Text>
          <Text style={styles.brand}>CraveZone 🍕</Text>
          <Text style={styles.subtitle}>
            Create your account and start your food journey
          </Text>

          <CustomTextInput
            placeholder="Full Name"
            value={name}
            onChangeText={(text) => {
              setName(text);
              if (error.name)
                setError((prev) => ({ ...prev, name: undefined }));
            }}
            iconName="person-outline"
          />
          {error.name && <Text style={styles.errorText}>{error.name}</Text>}

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

          <CustomTextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              if (error.confirmPassword)
                setError((prev) => ({ ...prev, confirmPassword: undefined }));
            }}
            secureTextEntry
            iconName="lock-closed-outline"
          />
          {error.confirmPassword && (
            <Text style={styles.errorText}>{error.confirmPassword}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.link}>Login</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
