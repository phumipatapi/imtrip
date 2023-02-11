import * as React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import LottieWithText from "../components/others/LottieWithText";

export default function MainInsightScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.light.tabBar,
        paddingHorizontal: 30,
        alignItems: "center",
      }}
    >
      <LottieWithText
        animatedSource={require("../assets/animatedIcon/insight.json")}
        lottieWidth={"100%"}
        title={"คุณยังไม่ได้สร้างกิจกรรม"}
        subTitle={"ลองสร้างกิจกรรมใหม่ เพื่อจัดการกิจกรรมของคุณ"}

      />
    </View>
  );
}
