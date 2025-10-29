import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import NextHeader from '../../Component/NextHeader';
import { BOOKINGINFORMATION } from '../../Navigation/NavigationString';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

function LocationCon() {
  const navigation = useNavigation();

  // 🔹 States
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <NextHeader />

      {/* Main Content */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        <View style={styles.cardWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {/* Pickup Input */}
            <View style={styles.inputWrapper}>
              <Image
                source={require('../../assets/image/loc1.png')}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Pickup Location"
                placeholderTextColor="#777"
                style={styles.input}
                value={pickup}
                onChangeText={setPickup}
              />
            </View>

            {/* Drop Input */}
            <View style={styles.inputWrapper}>
              <Image
                source={require('../../assets/image/loc2.png')}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Drop Location"
                placeholderTextColor="#777"
                style={styles.input}
                value={drop}
                onChangeText={setDrop}
              />
            </View>

            {/* Date Input */}
            <View style={styles.inputWrapper}>
              <Image
                source={require('../../assets/image/loc3.png')}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Select Date"
                placeholderTextColor="#777"
                style={styles.input}
                value={date}
                onChangeText={setDate}
              />
            </View>

            {/* Schedule Row */}
            <View style={styles.scheduleRow}>
              <Text style={styles.scheduleText}>Schedule Later?</Text>
              <Image
                source={require('../../assets/image/loc.png')}
                style={styles.scheduleIcon}
              />
            </View>

            {/* Book Now Button */}
            <TouchableOpacity
              style={styles.bookButton}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(BOOKINGINFORMATION)}
            >
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },

  keyboardView: {
    flex: 1,
  },

  // Card Wrapper (white box overlapping header)
  cardWrapper: {
    position: 'absolute',
    top: -height * 0.02, // overlaps header responsively
    left: width * 0.04,
    right: width * 0.04,
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: width * 0.08,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  scrollContainer: {
    paddingBottom: 20,
  },

  // Input box
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: height * 0.065,
  },

  inputIcon: {
    width: width * 0.06,
    height: width * 0.06,
    marginRight: 10,
    resizeMode: 'contain',
  },

  input: {
    flex: 1,
    fontSize: width * 0.04,
    color: '#000',
  },

  // Schedule Row
  scheduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
  },

  scheduleText: {
    fontSize: width * 0.045,
    color: '#027AFD',
    fontWeight: '600',
  },

  scheduleIcon: {
    width: width * 0.12,
    height: width * 0.12,
    resizeMode: 'contain',
  },

  // Book Button
  bookButton: {
    backgroundColor: '#027AFD',
    paddingVertical: height * 0.018,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: height * 0.01,
  },

  bookButtonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default LocationCon;
