import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Animated,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { DRIVERINFORMATION } from '../../../Navigation/NavigationString';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../Utils/Colors';

const { width, height } = Dimensions.get('window');

const BookingInformation = () => {
  const navigation = useNavigation();

  // Animation values
  const slideAnim = useRef(new Animated.Value(height)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current; // for map marker
  const cardIconAnim = useRef(new Animated.Value(0)).current; // for Delhi card icon

  const [region, setRegion] = useState({
    latitude: 28.5355,
    longitude: 77.391,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState({
    latitude: 28.6448,
    longitude: 77.216721,
  });
  const [cars] = useState([{ id: 1, latitude: 28.54577, longitude: 77.341217 }]);

  useEffect(() => {
    // Animate bottom card
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
    ]).start();

    // Animate destination marker (map)
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animate card Delhi icon
    Animated.loop(
      Animated.sequence([
        Animated.timing(cardIconAnim, {
          toValue: -5,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(cardIconAnim, {
          toValue: 5,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(cardIconAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Get current location
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion((prev) => ({ ...prev, latitude, longitude }));
        setCurrentLocation({ latitude, longitude });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* MAP SECTION */}
      <View style={styles.mapContainer}>
        <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region}>
          {currentLocation && (
            <Marker coordinate={currentLocation} title="Current Location" />
          )}

          {/* Destination marker on map */}
          {destination && (
            <Marker coordinate={destination} title="Delhi">
              <Animated.View style={{ transform: [{ translateX: bounceAnim }], alignItems: 'center' }}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/7541/7541708.png',
                  }}
                  style={{
                    width: 50,
                    height: 30,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.primary,
                    fontWeight: '600',
                    marginTop: 2,
                  }}
                >
                  Delhi
                </Text>
              </Animated.View>
            </Marker>
          )}

          {cars.map((car) => (
            <Marker key={car.id} coordinate={car} title="Car" />
          ))}
        </MapView>
      </View>

      {/* Animated Bottom Card */}
      <Animated.View
        style={[
          styles.bottomCard,
          {
            transform: [{ translateY: slideAnim }],
            opacity: fadeAnim,
          },
        ]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: height * 0.15 }}
        >
          <LinearGradient colors={[colors.primary, '#00BFFF']} style={styles.headerGradient}>
            <Text style={styles.bookingTitle}>🚘 Booking Information</Text>
          </LinearGradient>

          <View style={styles.infoCard}>
            <Text style={styles.label}>Pickup Location</Text>
            <View style={styles.pickupContainer}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/149/149059.png' }}
                style={styles.icon}
              />
              <Text style={styles.text}>Noida</Text>
            </View>

            <Text style={styles.label}>Destination</Text>
            <View style={styles.pickupContainer}>
              {/* 👇 Animated Delhi Icon */}
              <Animated.Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/17520/17520453.png' }}
                style={[
                  styles.icon,
                  {
                    tintColor: colors.primary,
                    transform: [{ translateY: cardIconAnim }],
                  },
                ]}
              />
              <Text style={styles.text}>Delhi</Text>
            </View>

            <Text style={styles.label}>Pick Up Date</Text>
            <View style={styles.pickupContainer}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2921/2921222.png' }}
                style={[styles.icon, { tintColor: colors.primary }]}
              />
              <Text style={styles.text}>Today</Text>
            </View>
          </View>

          <Text style={[styles.label, { color: colors.primary, marginTop: 18 }]}>
            Payment Method
          </Text>
          <View style={styles.paymentRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/483/483742.png' }}
                style={[styles.icon, { width: 22, height: 22 }]}
              />
              <Text style={[styles.text, { marginLeft: 10 }]}>Cash</Text>
            </View>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/64/64572.png' }}
              style={[styles.icon, { width: 20, height: 20, tintColor: '#027AFD' }]}
            />
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.bookButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate(DRIVERINFORMATION)}
        >
          <LinearGradient colors={[colors.primary, '#00BFFF']} style={styles.bookGradient}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EAF3FF' },
  mapContainer: { flex: 1 },
  map: { ...StyleSheet.absoluteFillObject },

  bottomCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.02,
    maxHeight: height * 0.6,
    elevation: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
  },

  headerGradient: {
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },

  bookingTitle: {
    fontSize: width * 0.05,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },

  infoCard: {
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderRadius: 14,
    padding: width * 0.04,
    backgroundColor: '#fafafa',
    shadowColor: colors.primary,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },

  label: {
    fontSize: width * 0.035,
    fontWeight: '500',
    color: 'gray',
    marginTop: height * 0.015,
  },

  pickupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    marginTop: 4,
  },

  icon: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
  },

  text: {
    fontSize: width * 0.04,
    color: '#333',
    marginLeft: 8,
  },

  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f4f9ff',
    borderRadius: 10,
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.04,
    marginTop: 5,
    elevation: 2,
  },

  bookButton: {
    position: 'absolute',
    bottom: height * 0.03,
    left: width * 0.06,
    right: width * 0.06,
    borderRadius: 14,
    overflow: 'hidden',
  },

  bookGradient: {
    paddingVertical: height * 0.018,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },

  bookButtonText: {
    color: '#fff',
    fontSize: width * 0.048,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default BookingInformation;
