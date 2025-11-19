import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import CustomTextInput from "@/component/CustomTextInput";
import { useRouter } from "expo-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<{ email?: string }>({});
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 540;

  const handleReset = () => {
    let isValid = true;
    let newError: { email?: string } = {};

    if (!email.trim()) {
      newError.email = "Please enter your email address";
      isValid = false;
    }

    setError(newError);

    if (isValid) {
      alert("Reset link sent to your email!");
      router.push("/")
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
      justifyContent:  "center",
      paddingHorizontal: isMobile ? 10 : 40,
      paddingTop: isMobile ? 40 : 0,
      paddingBottom: isMobile ? 30 : 0,
    },
    leftContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: isMobile ? "100%" : "60%",
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
      paddingHorizontal: 5,
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
    backText: {
      color: "#FF6B00",
      textAlign: "center",
      marginTop: 18,
      fontWeight: "500",
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
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Reset Your Password</Text>
          <Text style={styles.brand}>CraveZone 🍴</Text>

          <Text style={styles.subtitle}>
            Enter your registered email to receive a reset link
          </Text>

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

          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Send Reset Link</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/auth/login")}>
            <Text style={styles.backText}>← Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
