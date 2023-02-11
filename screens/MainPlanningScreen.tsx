import * as React from "react";
import { Text, TextComponent, View } from "react-native";
import Lottie from "lottie-react-native";
import Colors from "../constants/Colors";
import LottieWithText from "../components/others/LottieWithText";

export default function MainPlanningScreen() {
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
        animatedSource={require("../assets/animatedIcon/calendar.json")}
        lottieWidth={"80%"}
        title={"คุณยังไม่ได้สร้างกิจกรรม"}
        subTitle={"ลองสร้างกิจกรรมใหม่ เพื่อจัดการกิจกรรมของคุณ"}
      />
    </View>
  );
}
