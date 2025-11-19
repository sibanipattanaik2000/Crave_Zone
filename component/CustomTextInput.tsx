import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
  iconName?: keyof typeof Ionicons.glyphMap;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  iconName,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.inputContainer}>
      {/* Left Icon */}
      {iconName && (
        <Ionicons
          name={iconName}
          size={22}
          color="#FF6B00"
          style={styles.leftIcon}
        />
      )}

      {/* Input Field */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        keyboardType={keyboardType}
        style={[
          styles.input,
          {
            paddingRight: secureTextEntry ? 45 : 15,
            paddingLeft: iconName ? 40 : 15,
          },
        ]}
      />

      {/* Password Eye Icon */}
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Ionicons
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={22}
            color="#FF6B00"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFF2E5",
    borderRadius: 12,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 14,
  },
  leftIcon: {
    position: "absolute",
    left: 12,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 12,
  },
});
