import * as React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";

interface Props {
  navigation: any;
  route: any;
}

export default function SettingScreen(prop: Props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.light.tabBar,
        paddingHorizontal: 30,
        paddingTop: 40,
      }}
    ></View>
  );
}
