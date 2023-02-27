import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import MainInsightScreen from "../screens/MainInsightScreen";
import MainPlanningScreen from "../screens/MainPlanningScreen";
import MainMessageScreen from "../screens/MainMessageScreen";
import CreateActivityScreen from "../screens/CreateActivity/CreateActivityScreen";
import CreateActivityScreen2 from "../screens/CreateActivity/CreateActivityScreen2";
import SettingScreen from "../screens/SettingScreen";
import { Button, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import CreateActivityScreen3 from "../screens/CreateActivity/CreateActivityScreen3";
import CreateActivityScreen4 from "../screens/CreateActivity/CreateActivityScreen4";
import CreateActivityScreen5 from "../screens/CreateActivity/CreateActivityScreen5";

const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ["CreateActivity", "CreateActivity2", "CreateActivity3", "CreateActivity4", "CreateActivity5"];
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
        name="CreateActivity"
        component={CreateActivityScreen}
        options={({ navigation, route }) => ({

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
        name="CreateActivity2"
        component={CreateActivityScreen2}
        options={({ navigation, route }) => ({

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
        name="CreateActivity3"
        component={CreateActivityScreen3}
        options={({ navigation, route }) => ({

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
        name="CreateActivity4"
        component={CreateActivityScreen4}
        options={({ navigation, route }) => ({

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
        name="CreateActivity5"
        component={CreateActivityScreen5}
        options={({ navigation, route }) => ({

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
    </Stack.Navigator>
  );
};
const PlanningStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ปฏิทินกิจกรรม"
        component={MainPlanningScreen}
        options={{
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
        }}
      />
    </Stack.Navigator>
  );
};

const InsightStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ข้อมูลเชิงลึก"
        component={MainInsightScreen}
        options={{
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
        }}
      />
    </Stack.Navigator>
  );
};
const MessageStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ข้อความ"
        component={MainMessageScreen}
        options={{
          headerTitleStyle: { fontFamily: "Mitr_400Regular", fontSize: 20 },
        }}
      />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  PlanningStackNavigator,
  InsightStackNavigator,
  MessageStackNavigator,
};
