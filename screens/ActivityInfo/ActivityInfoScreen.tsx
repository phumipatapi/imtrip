import * as React from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import ChatBox from "../../components/Messages/chatBox";
import LottieWithText from "../../components/others/LottieWithText";
import Colors from "../../constants/Colors";
import ActivityInfoTab from "../../components/ActivityInfo/Tabbar";

export default function ActivityInfoScreen() {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: Colors.light.tabBar,
      }}
    >
      <View
        style={{
          height: 240,

          backgroundColor: Colors.light.black,
        }}
      >
        <Image
          source={require("../../assets/activityImg1.jpeg")}
          style={{
            width: "100%",
            height: "70%",

            opacity: 0.5,
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 40,
            left: 20,
            right: 0,
            bottom: 0,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              color: Colors.light.background,
              fontSize: 30,
            }}
          >
            สานตะกร้ากันเถอะ
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.light.background,
            height: "30%",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontFamily: "Kanit_700Bold",
                  color: Colors.light.black,
                  fontSize: 20,
                }}
              >
                0
              </Text>
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.grey,
                  fontSize: RFPercentage(1.5),
                }}
              >
                ผู้เข้าดู
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontFamily: "Kanit_700Bold",
                  color: Colors.light.black,
                  fontSize: 20,
                }}
              >
                0
              </Text>
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.grey,
                  fontSize: RFPercentage(1.5),
                }}
              >
                ดำเนินการจอง
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontFamily: "Kanit_700Bold",
                  color: Colors.light.black,
                  fontSize: 20,
                }}
              >
                0
              </Text>
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.grey,
                  fontSize: RFPercentage(1.5),
                }}
              >
                เรทติ้ง
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontFamily: "Kanit_700Bold",
                  color: Colors.light.black,
                  fontSize: 20,
                }}
              >
                0
              </Text>
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.grey,
                  fontSize: RFPercentage(1.5),
                }}
              >
                จองทั้งหมด
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ActivityInfoTab />
    </View>
  );
}
