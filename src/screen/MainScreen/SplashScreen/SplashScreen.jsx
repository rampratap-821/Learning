
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { BUTTON } from '../../../Navigation/NavigationString'
import LinearGradient from 'react-native-linear-gradient'

const SplashScreen = () => {

  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(BUTTON)
    }, 3000)
  }, [])

  return (
    <LinearGradient
      colors={['#137bcfff', '#e9065dff']} // Gradient colors
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 30, color: "yellow", fontWeight: 'bold' }}>  Rampratap </Text>
      <Text style={{ fontSize: 30, color: "yellow", fontWeight: 'bold' }}>  Ecomerce website </Text>

    </LinearGradient>
  )
}

export default SplashScreen
