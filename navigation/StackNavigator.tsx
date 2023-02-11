import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import MainInsightScreen from "../screens/MainInsightScreen";
import MainPlanningScreen from "../screens/MainPlanningScreen";
import MainMessageScreen from "../screens/MainMessageScreen";
import CreateActivityScreen from "../screens/CreateActivityScreen";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
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
        options={{ headerShown: false }}
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
