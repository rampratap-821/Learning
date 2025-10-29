import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

function NextHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Background Decorative Lottie */}
      <LottieView
        source={require('../assets/image/servies.json')}
        autoPlay
        loop
        style={styles.bgAnimation}
      />

      {/* Right-side Main Lottie Animation */}
      <View style={styles.rightAnimationWrapper}>
        <LottieView
          source={require('../assets/image/Van.json')} // bike/van animation
          autoPlay
          loop
          style={styles.rightAnimation}
        />
      </View>

      {/* Go Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2722/2722991.png',
          }}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Left-aligned Text */}
      <View style={styles.textWrapper}>
        <Text style={styles.mainText}>Ride Smarter</Text>
        <Text style={styles.subText}>Go Anywhere Effortlessly</Text>
        <Text style={styles.tagline}>Book Your Taxi Instantly</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.45,
    backgroundColor: '#027AFD',
    borderBottomLeftRadius: width * 0.08,
    borderBottomRightRadius: width * 0.08,
    overflow: 'hidden',
    position: 'relative',
  },

  // Background soft decorative Lottie
  bgAnimation: {
    position: 'absolute',
    width: width * 1.4,
    height: height * 0.5,
    top: 0,
    right: 0,
    opacity: 0.2,
  },

  // Go Back Button
  backButton: {
    position: 'absolute',
    top: height * 0.06,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 8,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    width: 28,
    height: 28,
    tintColor: '#fff',
  },

  // Left-aligned Text
  textWrapper: {
    position: 'absolute',
    left: 20,
    top: height * 0.15,
    width: '55%', // space left for right animation
  },

  mainText: {
    fontSize: width * 0.065,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.5,
  },

  subText: {
    fontSize: width * 0.045,
    fontWeight: '500',
    color: '#E3F2FD',
    marginTop: 6,
  },

  tagline: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#FFEB3B',
    marginTop: 8,
    letterSpacing: 0.8,
  },

  // Right-side Lottie wrapper
  rightAnimationWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '45%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  rightAnimation: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default NextHeader;
