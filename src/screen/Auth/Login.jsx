import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HOMESCREEN } from "../../Navigation/NavigationString";

const { width } = Dimensions.get("window");

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate(HOMESCREEN);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../../assets/image/GativryaaLogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Tagline */}
      <Text style={styles.tagline}>Ready to take you wherever you want</Text>

      {/* Buttons */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signinText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center", // 👈 Center everything vertically
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 16,
    color: "#807F7F",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 22,
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center",
    gap: 15, // space between buttons
  },
  loginButton: {
    width: "90%",
    backgroundColor: "#027AFD",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  signinButton: {
    width: "90%",
    borderColor: "#027AFD",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  signinText: {
    color: "#027AFD",
    fontSize: 16,
    fontWeight: "500",
  },
});
