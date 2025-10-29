
// import React from "react";
// import Navigation from "./src/Navigation/Navigation";

// export default function App() {
//   return (
//    <Navigation/>
//   );
// }

// App.js
// App.js ke top par, agar aapne yeh kiya ho:
import firebase from '@react-native-firebase/app';
// Bas zaroorat ke modules ko hi import karein. App module ki zaroorat nahi hai.
import messaging from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert, PermissionsAndroid, Platform } from 'react-native';


function App() {
  
  // Permissions aur Token lene ke liye function
  async function setupFCM() {
    try {
      // 1. Permissions Request karein (Android 13+ aur iOS ke liye zaroori)
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
      if (enabled) {
        // 2. FCM Token prapt karein
        const token = await messaging().getToken();
        if (token) {
          console.log('\n--- ✅ YOUR FCM TOKEN (COPY THIS) ---');
          console.log(token);
          console.log('--------------------------------------\n');
          // **इस Token को Firebase Console में Paste करें**
        }
      } else {
        console.warn('Notification Permission denied.');
      }
    } catch (error) {
      console.error("FCM Setup Error:", error);
      // 'No Firebase App' error yahan aane par Android/Gradle setup check karein.
    }
  }

  // Notification Handling
  useEffect(() => {
    
    // Initial setup call (Permission aur Token)
    setupFCM();

    // 3. App jab foreground (use ho raha) mein ho, tab notification handle karein
    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      // Alert box mein notification dikhayein
      Alert.alert(
        remoteMessage.notification?.title || 'FCM Notification',
        remoteMessage.notification?.body || 'No message content',
      );
      console.log('Foreground Message Received:', remoteMessage);
    });
    
    // Cleanup function (Zaroori)
    return unsubscribeForeground; 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>FCM Testing Mode Ready</Text>
      <Text style={styles.textSmall}>Token Console mein dekhein aur copy karein.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  textSmall: {
    marginTop: 10,
    fontSize: 14,
    color: 'green'
  }
});

export default App;