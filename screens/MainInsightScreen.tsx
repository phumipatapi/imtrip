import * as React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import LottieWithText from "../components/others/LottieWithText";
import InsightTab from "./InsightTab/InsightTabbar";
interface Props {
  navigation: any;
}

export default function MainInsightScreen(props: Props) {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: Colors.light.tabBar,
      }}
    >
      <InsightTab navigation={props.navigation} />
    </View>
  );
}
