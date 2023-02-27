import * as React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import LottieWithText from "../components/others/LottieWithText";

export default function MainInsightScreen() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
        backgroundColor: Colors.light.tabBar,
        paddingHorizontal: 30,
      }}
    >
      {/* <LottieWithText
        animatedSource={require("../assets/animatedIcon/insight.json")}
        lottieWidth={"100%"}
        title={"คุณยังไม่ได้สร้างกิจกรรม"}
        subTitle={"ลองสร้างกิจกรรมใหม่ เพื่อจัดการกิจกรรมของคุณ"}
      /> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            borderRightWidth: 1,
            borderRightColor: Colors.light.grey,
            paddingRight: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.black,
            }}
          >
            รายได้
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
            }}
          >
            ฿{" "}
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 22,
                color: Colors.light.button,
              }}
            >
              1,000
            </Text>
          </Text>
          <View
            style={{
              backgroundColor: Colors.light.tabIconDefault,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 12,
                color: Colors.light.black,
              }}
            >
              + 10% จากเดือนที่แล้ว
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            borderRightWidth: 1,
            borderRightColor: Colors.light.grey,
            paddingHorizontal: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.black,
            }}
          >
            การจองกิจกรรม
          </Text>

          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 22,
              color: Colors.light.button,
            }}
          >
            1,000
          </Text>
          <View
            style={{
              backgroundColor: Colors.light.tabIconDefault,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 12,
                color: Colors.light.black,
              }}
            >
              3 การจองในเดือนนี้
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "column", paddingLeft: 15 }}>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.black,
            }}
          >
            เรทติ้ง
          </Text>

          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 22,
              color: Colors.light.button,
            }}
          >
            4.58
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 22,
            color: Colors.light.black,
          }}
        >
          การจองกิจกรรม
        </Text>
      </View>
    </View>
  );
}
