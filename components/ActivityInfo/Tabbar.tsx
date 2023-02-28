import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../../constants/Colors";
import BookingList from "../../screens/ActivityInfo/BookingListScreen";
import ManageScreen from "../../screens/ActivityInfo/ManageScreen";
import ReviewList from "../../screens/ActivityInfo/ReviewListScreen";
import MainInsightScreen from "../../screens/MainInsightScreen";

const Tab = createMaterialTopTabNavigator();

const ActivityInfoTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="การจอง"
        component={BookingList}
        options={{
          tabBarLabelStyle: { fontSize: 18, fontFamily: "Mitr_400Regular" },
          tabBarIndicatorStyle: { backgroundColor: Colors.light.button },
        }}
      />
      <Tab.Screen
        name="รีวิว"
        component={ReviewList}
        options={{
          tabBarLabelStyle: { fontSize: 18, fontFamily: "Mitr_400Regular" },
          tabBarIndicatorStyle: { backgroundColor: Colors.light.button },
        }}
      />
      <Tab.Screen
        name="จัดการ"
        component={ManageScreen}
        options={{
          tabBarLabelStyle: { fontSize: 18, fontFamily: "Mitr_400Regular" },
          tabBarIndicatorStyle: { backgroundColor: Colors.light.button },
        }}
      />
    </Tab.Navigator>
  );
};

export default ActivityInfoTab;
