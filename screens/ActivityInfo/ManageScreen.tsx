import * as React from "react";
import { View, Switch, Text } from "react-native";
import Colors from "../../constants/Colors";
import { useState } from "react";

export default function ManageScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: Colors.light.tabBar,
        paddingHorizontal: 30,
        paddingVertical: 20,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 20,
            color: Colors.light.black,
          }}
        >
          ปิดกิจกรรมชั่วคราว
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.light.button }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      {/* <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: Colors.light.button,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginTop: 20,
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          marginHorizontal: 30,
          flexDirection: "row",
        }}
       
      >
        <MaterialCommunityIcons
          name="calendar"
          size={25}
          color={Colors.light.background}
        />
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 18,
            color: Colors.light.background,
            marginLeft: 10,
          }}
        >
          ปิดกิจกรรมวันที่
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}
