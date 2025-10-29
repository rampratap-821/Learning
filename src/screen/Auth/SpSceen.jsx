import React, { useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { HOMESCREEN, LOGINSCREEN } from '../../Navigation/NavigationString';

const { width, height } = Dimensions.get('window');

function SpScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(HOMESCREEN);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F8FBFF" barStyle="dark-content" />

      {/* Full background gradient */}
      <LinearGradient
        colors={['#F8FBFF', '#EAF3FF', '#DDEBFF']}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      {/* Soft glow effects */}
      <LinearGradient
        colors={['rgba(0,183,255,0.15)', 'transparent']}
        style={styles.topGlow}
      />
      <LinearGradient
        colors={['transparent', 'rgba(153,102,255,0.15)']}
        style={styles.bottomGlow}
      />

      {/* Center aligned content */}
      <View style={styles.centerBox}>
        {/* Logo with soft glow */}
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/image/GativryaaLogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          {/* <View style={styles.logoGlow} /> */}
        </View>

        {/* Animation */}
        <LottieView
          source={require('../../assets/image/Animation - 1707994139499.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
    </View>
  );
}

export default SpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  topGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.25,
  },
  bottomGlow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.4,
  },
  centerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15, // closer spacing between logo & animation
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    width: width * 0.9,
    height: width * 0.55,
  },
  logoGlow: {
    position: 'absolute',
    bottom: -5,
    width: width * 0.5,
    height: 15,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.8,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    // elevation: 10,
  },
  lottie: {
    width: width * 0.55,
    height: width * 0.55,
    backgroundColor: 'transparent',
    marginTop: -40, // brings it closer to logo
  },
});
