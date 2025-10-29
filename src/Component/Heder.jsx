import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import colors from '../Utils/Colors';

function Heder() {
  return (
    <View style={styles.header}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome, Upendra Singh</Text>

      {/* Lottie Animation */}
      <View style={styles.lottieContainer}>
        <LottieView
          source={require('../assets/image/yallow.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>

      {/* Images */}
      <Image
        source={require('../assets/image/pari.png')}
        style={styles.pariImage}
      />

      <Image
        source={require('../assets/image/heder1.png')}
        style={styles.hederImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  welcomeText: {
    top: 30,
    right: 66,
    marginTop: 40,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lottieContainer: {
    position: 'absolute',
    top: 88, // text ke niche
    left: 40, // center align
  },
  lottie: {
    width: 130,
    height: 130,
  },
  pariImage: {
    width: 50,
    height: 50,
    top: 50,
    left: 155,
    resizeMode: 'contain',
  },
  hederImage: {
    width: 400,
    height: 100,
    left: 60,
    top: -10,
    resizeMode: 'contain',
  },
});

export default Heder;
