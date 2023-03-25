import React, { useCallback, useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Mitr_400Regular, Mitr_600SemiBold } from '@expo-google-fonts/mitr';
import { Kanit_700Bold } from '@expo-google-fonts/kanit';
import BottomTabNavigator from "./navigation/TabNavigator";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import SignInScreen from './screens/auth/SignInScreen';
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainScreen from './screens/MainScreen';
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [isLogIn, setIsLogIn] = useState(false);



  const Stack = createStackNavigator();

  function AppStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  useFonts({
    Mitr_400Regular,
    Mitr_600SemiBold,
    Kanit_700Bold
  });


  useEffect(() => {

    async function prepare() {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');

        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {

        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    // <SignInScreen />

    <NavigationContainer onReady={onLayoutRootView}>
      <SafeAreaView style={{ flex: 1 }}>
        {accessToken != null ? <AppStack /> : <SignInScreen setAccessToken={
          (accessToken) => {
            setAccessToken(accessToken);
          }
        } />}
      </SafeAreaView>
    </NavigationContainer>

  );
}