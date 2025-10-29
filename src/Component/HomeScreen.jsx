import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { BOTTOMTAB } from "../Navigation/NavigationString";
import colors from "../Utils/Colors";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <StatusBar backgroundColor="#027AFD" barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Blue Header */}
        <View style={styles.topHeader}>
          <Text style={styles.headerTitle}>WELCOME</Text>
          <Text style={styles.headerSubtitle}>
            Please fill in your data before entering
          </Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Phone Input */}
          <View style={styles.inputWrapper}>
            <Image
              source={require("../assets/image/telephone.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Phone"
              placeholderTextColor="#777"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputWrapper}>
            <Image
              source={require("../assets/image/padlock.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#777"
              secureTextEntry={secureText}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setSecureText(!secureText)}
            >
              <Image
                source={require("../assets/image/hide.png")}
                style={styles.eyeIconImage}
              />
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={styles.forgetPass}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate(BOTTOMTAB)}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.signInEmailButton}>
            <View style={styles.signInRow}>
              <View style={styles.line} />
              <Text style={styles.signInEmailText}>or login with</Text>
              <View style={styles.line} />
            </View>
          </View>

          {/* Social Login Buttons */}
          <TouchableOpacity style={styles.altButton}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/2875/2875404.png",
              }}
              style={styles.altButtonIcon}
            />
            <Text style={styles.altButtonText}>Login with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.altButton}>
            <Image
              source={require("../assets/image/apple.png")}
              style={styles.altButtonIcon}
            />
            <Text style={styles.altButtonText}>Login with Apple</Text>
          </TouchableOpacity>

          {/* Register Link */}
          <TouchableOpacity style={styles.registerWrapper}>
            <Text style={styles.registerText}>
              Don't have an account?{" "}
              <Text style={styles.registerLink}>Register here</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    // flexGrow: 1,
    justifyContent: "center", // vertical center
    alignItems: "center",     // horizontal center
    // paddingVertical: 10,
  },
  topHeader: {
    width: width,
    height: height * 0.25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    marginTop:60,
    color: "#fff",
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#e0e0e0",
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
  formCard: {
    width: width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
    height: 50,
    width: "100%",
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  eyeIconImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  forgetPass: {
    textAlign: "right",
    color: colors.primary,
    marginBottom: 15,
    fontSize: 14,
    textDecorationLine: "underline",
    alignSelf: "flex-end",
    width: "100%",
  },
  loginButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInEmailButton: {
    width: "100%",
    marginVertical: 15,
  },
  signInRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  signInEmailText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
    textAlign: "center",
  },
  altButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  altButtonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: "contain",
  },
  altButtonText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  registerWrapper: {
    marginTop: 20,
    alignItems: "center",
  },
  registerText: {
    fontSize: 14,
    color: colors.primary,
  },
  registerLink: {
    fontWeight: "bold",
  },
});
