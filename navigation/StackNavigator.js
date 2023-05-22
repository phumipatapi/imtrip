import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import MainWishlist from "../screens/MainWishlistScreen";
import MainBookingScreen from "../screens/MainBookingScreen";
import MainMessageScreen from "../screens/MainMessageScreen";

import SettingScreen from "../screens/SettingScreen";
import { Button, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import TermAndConditionScreen from "../screens/TermAndCondition";
import ActivityInfoScreen from "../screens/ActivityInfo/ActivityInfoScreen";
import BookingDetailScreen from "../screens/BookingDetail/BookingDetailScreen";
import { activity } from "../screens/model/createActivity";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import TermAndConditionsScreen from "../screens/TermAndCondition";
import ChatScreen from "../screens/Chat/ChatScreen";
import Chat from "../screens/Chat/ChatScreen";

import AboutUsScreen from "../screens/AboutScreen";
import SearchScreen from "../screens/SearchScreen";
import PaymentScreen from "../screens/Payment/PaymentScreen";
import ChoosePayment from "../screens/Payment/ChoosePaymentScreen";
import SuccessPayment from "../screens/Payment/SuccessPaymentScreen";

const Stack = createStackNavigator();

const AuthStackNavigator = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ["SignIn"];
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex', height: 65, } });
    }
  })

  return (
    <Stack.Navigator name="AuthStack">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Term"
        component={TermAndConditionsScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}


const MainStackNavigator = ({ navigation, route }) => {

  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ["SuccessPayment", "TermAndCondition", "ActivityInfo", "BookingDetail", "SignIn", "AboutUs", "Chat", "MonthReport","Payment"];
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex', height: 65, } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      

      <Stack.Screen
        name="ActivityInfo"
        component={ActivityInfoScreen}
        options={{ headerShown: false }}
      
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ navigation, route }) => ({
          // headerStyle: { paddingBottom: 20 },
          title: "แชท",
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  paddingLeft: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color={Colors.light.grey}
                />
              </TouchableOpacity>
            );
          },
        })}
      />
        <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={({ navigation, route }) => ({
          // headerStyle: { paddingBottom: 20 },
          title: "การจองและชำระเงิน",
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  paddingLeft: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color={Colors.light.grey}
                />
              </TouchableOpacity>
            );
          },

        })}
      />
       <Stack.Screen
        name="ChoosePayment"
        component={ChoosePayment}
        options={({ navigation, route }) => ({
          // headerStyle: { paddingBottom: 20 },
          title: "การชำระเงิน",
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  paddingLeft: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color={Colors.light.grey}
                />
              </TouchableOpacity>
            );
          },

        })}
      />
       <Stack.Screen
        name="SuccessPayment"
        component={SuccessPayment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookingDetail"
        component={BookingDetailScreen}
        options={({ navigation, route }) => ({
          // headerStyle: { paddingBottom: 20 },
          title: "",
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  paddingLeft: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color={Colors.light.grey}
                />
              </TouchableOpacity>
            );
          },

        })}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={({ navigation, route }) => ({
          // headerStyle: { paddingBottom: 20 },
          title: "บัญชีของฉัน",
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  paddingLeft: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color={Colors.light.grey}
                />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="TermCondition"
        component={TermAndConditionScreen}
        options={({ navigation, route }) => ({
          // headerStyle: { paddingBottom: 20 },
          title: "Term and Condition",
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  paddingLeft: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color={Colors.light.grey}
                />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={({ navigation, route }) => ({
          // headerStyle: { paddingBottom: 20 },
          title: "เกี่ยวกับเรา",
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  paddingLeft: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color={Colors.light.grey}
                />
              </TouchableOpacity>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};
const BookingStackNavigator = ({
  navigation,
  route,
}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = [ "Chat"];
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex', height: 65, } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="กิจกรรมของฉัน"
        component={MainBookingScreen}
        options={{
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="BookingDetail"
        component={BookingDetailScreen}
        options={({ navigation, route }) => ({
          // headerStyle: { paddingBottom: 20 },
          title: "",
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  paddingLeft: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color={Colors.light.grey}
                />
              </TouchableOpacity>
            );
          },

        })}
      />
       <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
        }}
      />

    </Stack.Navigator>
  );
};

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="กิจกรรมโปรด"
        component={MainWishlist}
        options={{
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
        }}
      />
   

    </Stack.Navigator>

  );
};
const MessageStackNavigator = ({
  navigation,
  route,
}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = [ "Chat"];
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex', height: 65, } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ข้อความ"
        component={MainMessageScreen}
        options={{
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ navigation, route }) => ({
          // headerStyle: { paddingBottom: 20 },
          title: "แชท",
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
          headerLeft: (props) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  paddingLeft: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color={Colors.light.grey}
                />
              </TouchableOpacity>
            );
          },
        })}
      />

    </Stack.Navigator>
  );
};

export {
  AuthStackNavigator,
  MainStackNavigator,
  BookingStackNavigator,
  FavoriteStackNavigator,
  MessageStackNavigator,
};
