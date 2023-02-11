import * as React from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import Colors from "../constants/Colors";
import ActivityBox from "../components/MainScreen/ActivityBox";

interface Props {
  navigation: any;
}

export default function MainScreen(props: Props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.light.tabBar,
        paddingHorizontal: 30,
        paddingTop: 40,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontFamily: "Mitr_400Regular", fontSize: 24 }}>
            ยินดีต้อนรับ!
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.grey,
            }}
          >
            คุณ ธนพล สุขสวัสดิ์
          </Text>
        </View>

        <TouchableOpacity>
          <Image
            source={require("../assets/icon.png")}
            style={{
              height: 52,
              width: 52,
              resizeMode: "cover",
              borderRadius: 26,
            }}
          />
        </TouchableOpacity>
      </View>

      <ActivityBox
        viewer={0}
        booking={0}
        rating={0}
        allbooking={0}
      ></ActivityBox>
      <View>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: Colors.light.button,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            marginTop: 40,
            elevation: 3,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
          }}
          onPress={() => props.navigation.navigate("CreateActivity")}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.background,
            }}
          >
            สร้างกิจกรรมใหม่
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
