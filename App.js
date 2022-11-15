import React, { useCallback, useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen'
import MainMyTripScreen from './screens/MainMyTripScreen'
import MainWishlistScreen from './screens/MainWishlistScreen'
import MainMessageScreen from './screens/MainMessageScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let circleColor;
              size = 32;

              if (route.name === 'Home') {
                iconName = 'home-variant-outline';
                circleColor = focused ? '#DAB88B' : ''
              } else if (route.name === 'MyTrip') {
                iconName = 'bag-suitcase-outline';
                circleColor = focused ? '#DAB88B' : ''
              } else if (route.name === 'Wishlists') {
                iconName = 'cards-heart-outline';
                circleColor = focused ? '#DAB88B' : ''
              } else if (route.name === 'Messages') {
                iconName = 'message-outline';
                circleColor = focused ? '#DAB88B' : ''
              }
              return (
                <View style={{
                  justifyContent: "center",
                  alignItems: 'center'
                }}>
                  <MaterialCommunityIcons name={iconName} size={size} color={color} />
                  <View style={{
                    width: 8,
                    height: 8,
                    justifyContent: "center",
                    borderRadius: 8 / 2,
                    backgroundColor: circleColor,
                  }}>
                  </View>
                </View>
              )
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'black',
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: '#FBFBFB',
              height: 65
            }
          })}

        >
          <Tab.Screen name="Home" component={MainScreen} />
          <Tab.Screen name="MyTrip" component={MainMyTripScreen} />
          <Tab.Screen name="Wishlists" component={MainWishlistScreen} />
          <Tab.Screen name="Messages" component={MainMessageScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}