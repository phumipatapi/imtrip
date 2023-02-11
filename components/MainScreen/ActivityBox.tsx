import * as React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  viewer: number;
  booking: number;
  rating: number;
  allbooking: number;
}

const ActivityBox = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        height: 240,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 40,
        backgroundColor: Colors.light.black,
        borderRadius: 20,
      }}
    >
      <Image
        source={require("../../assets/activityImg1.jpeg")}
        style={{
          width: "100%",
          height: "70%",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          opacity: 0.7,
        }}
      />

      <View
        style={{
          backgroundColor: Colors.light.background,
          height: "30%",
          borderBottomEndRadius: 20,
          borderBottomLeftRadius: 20,
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
              {props.viewer}
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                color: Colors.light.grey,
                fontSize: 16,
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
              {props.booking}
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                color: Colors.light.grey,
                fontSize: 16,
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
              {props.rating}
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                color: Colors.light.grey,
                fontSize: 16,
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
              {props.allbooking}
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                color: Colors.light.grey,
                fontSize: 16,
              }}
            >
              จองทั้งหมด
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActivityBox;
