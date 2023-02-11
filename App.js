import React, { useCallback, useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen'
import MainMyTripScreen from './screens/MainInsightScreen'
import MainWishlistScreen from './screens/MainPlanningScreen'
import MainMessageScreen from './screens/MainMessageScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Mitr_400Regular, Mitr_600SemiBold } from '@expo-google-fonts/mitr';
import { Kanit_700Bold } from '@expo-google-fonts/kanit';
import Colors from './constants/Colors';
import BottomTabNavigator from "./navigation/TabNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  let [fontsLoaded] = useFonts({
    Mitr_400Regular,
    Mitr_600SemiBold,
    Kanit_700Bold
  });



  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        if (!fontsLoaded) {
          return null;
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const Tab = createBottomTabNavigator();

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }



  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <SafeAreaView style={{ flex: 1 }}>
        <BottomTabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}