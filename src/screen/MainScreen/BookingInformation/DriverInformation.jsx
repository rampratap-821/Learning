import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import RogerPayAdvanced from '../RogerPayAdvanced/RogerPayAdvanced';

const { width, height } = Dimensions.get('window');

const colors = {
  primary: '#027AFD',
};

const DriverInformation = () => {
  const navigation = useNavigation()
  const [region, setRegion] = useState({
    latitude: 28.5355,
    longitude: 77.3910,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [cars] = useState([{ id: 1, latitude: 28.6457709, longitude: 77.321217 }]);

  // Animations
  const callAnim = useRef(new Animated.Value(1)).current;
  const delhiAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(height)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Slide-up bottom card animation
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Pulse animation for call icon
    Animated.loop(
      Animated.sequence([
        Animated.timing(callAnim, {
          toValue: 1.2,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(callAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Pulse animation for Delhi location icon
    Animated.loop(
      Animated.sequence([
        Animated.timing(delhiAnim, {
          toValue: 1.15,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(delhiAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Get current location
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({ ...region, latitude, longitude });
        setCurrentLocation({ latitude, longitude });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setDestination({ latitude, longitude });
  };

  return (
    <View style={styles.container}>
      {/* Map Section */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onPress={handleMapPress}
      >
        {currentLocation && <Marker coordinate={currentLocation} title="Current Location" />}
        {destination && <Marker coordinate={destination} title="Destination" />}
        {cars.map((car) => (
          <Marker key={car.id} coordinate={car} title="Car" />
        ))}
      </MapView>

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
          contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
        >
          <Text style={styles.bookingInformation}>Driver Information</Text>

          {/* Driver Info Card */}
          <View style={styles.driverCard}>
            <View style={styles.driverLeft}>
              <Image
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?fm=jpg&q=60&w=3000',
                }}
                style={styles.profileImage}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.driverName}>Abdullah 4.5 ⭐</Text>
                <Text style={styles.carNumber}>B 1234 EA • Arriving Soon</Text>
              </View>
            </View>

            {/* Animated Call Icon */}
            <View style={styles.iconRow}>
              <Animated.View style={{ transform: [{ scale: callAnim }] }}>
                <TouchableOpacity>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/128/684/684849.png' }}
                    style={[styles.icon, { tintColor: "#1c0857ff" }]}
                  />
                </TouchableOpacity>
              </Animated.View>
              <TouchableOpacity>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/128/455/455705.png' }}
                  style={[styles.icon, { marginLeft: 14, tintColor: "#1f0c5aff" }]}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Order Info */}
          <Text style={[styles.bookingInformation, { marginTop: 15 }]}>Ordering Information</Text>

          <View style={styles.orderCard}>
            <Text style={styles.label}>Pickup Location</Text>
            <View style={styles.pickupContainer}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/149/149059.png' }}
                style={styles.icon}
              />
              <Text style={styles.text}>Noida</Text>
            </View>

            <Text style={styles.label}>Delivery Location</Text>
            <View style={styles.pickupContainer}>
              {/* Animated Delhi Icon */}
              <Animated.Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/17520/17520453.png' }}
                style={[styles.icon, { tintColor: colors.primary, transform: [{ scale: delhiAnim }] }]}
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

          <TouchableOpacity style={styles.submitButton}
           onPress={()=> navigation.navigate(RogerPayAdvanced)}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: "center" }}>Confirm Payment</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { ...StyleSheet.absoluteFillObject },

  bottomCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    maxHeight: height * 0.7, // scrollable height
  },

  bookingInformation: {
    fontSize: width * 0.045,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 8,
    color: colors.blue,
  },

  driverCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9ff',
    borderRadius: 12,
    padding: 14,
    width: '100%',
    elevation: 3,
  },

  driverLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  profileImage: { width: 54, height: 54, borderRadius: 50 },
  driverName: { fontSize: 16, fontWeight: '600', color: '#333' },
  carNumber: { fontSize: 13, color: 'gray', marginTop: 2 },
  iconRow: { flexDirection: 'row', alignItems: 'center' },
  icon: { width: 22, height: 22, resizeMode: 'contain' },

  orderCard: {
    borderWidth: 0.4,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    marginTop: 6,
    width: '100%',
    elevation: 4,
  },
  label: { fontSize: 13, color: 'gray', marginTop: 8, marginLeft: 5 },
  pickupContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  text: { fontSize: 14, color: '#333', marginLeft: 8 },

  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 18,
    width: '100%',
  },
});

export default DriverInformation;
