import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Colors from "../../constants/Colors";
import DropDownPicker from "react-native-dropdown-picker";
import { RadioButton } from "react-native-paper";
import { Activity, activity } from "../model/createActivity";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  navigation: any;
  route: any;
}

export default function MonthReportScreen(prop: Props) {
  const { month, year } = prop.route.params;
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#EDF1D6",
          height: Dimensions.get("window").height * 1.5,
          width: Dimensions.get("window").width * 2,

          borderRadius: Dimensions.get("window").width,
          position: "absolute",
          bottom:
            Dimensions.get("window").width -
            Dimensions.get("window").height * 0.1,
          alignItems: "center",
        }}
      ></View>
      <View
        style={{
          width: Dimensions.get("window").width,
          marginTop: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            prop.navigation.goBack();
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 25,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 2,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          }}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color={Colors.light.grey}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,

            fontFamily: "Mitr_400Regular",
          }}
        >
          ข้อมูลเดือน {month} {year}
        </Text>
        <View
          style={{
            width: 40,
          }}
        ></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            paddingHorizontal: 30,
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          <Image
            source={require("../../assets/juicy-team-analyzes-graphs-and-diagrams.gif")}
            style={{
              width: Dimensions.get("window").width * 0.8,
              resizeMode: "contain",
            }}
          />
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              fontFamily: "Mitr_400Regular",
              color: Colors.light.darkGrey,
            }}
          >
            ข้อมูลเชิงลึกส่วนนี้มาจากข้อมูลของเดือน{month} {year} เท่านั้น
            หากต้องการดูข้อมูลเปรียบเทียบ โปรดกลับไปที่ข้อมูลเชิงลึกรายปี
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 10,
              borderColor: Colors.light.lightGreen,
              padding: 30,
              marginTop: 20,
              width: Dimensions.get("window").width * 0.8,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.black,
                }}
              >{`ยอดจอง:`}</Text>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.button,
                }}
              >{` 20 การจอง`}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.black,
                }}
              >{`อัตราการเติบโต:`}</Text>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.button,
                }}
              >{` เพิ่มขึ้น 3.67%`}</Text>
            </View>
            <View
              style={{
                height: 2,
                width: 250,
                backgroundColor: Colors.light.grey,
                alignSelf: "center",
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            <View
              style={{
                flexDirection: "column",

                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.black,
                }}
              >{`กิจกรรมที่โดดเด่นมากที่สุด`}</Text>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.button,
                }}
              >
                กิจกรรมห่มทราย
              </Text>
            </View>
            <View
              style={{
                height: 2,
                width: 250,
                backgroundColor: Colors.light.grey,
                alignSelf: "center",
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.black,
                }}
              >{`ยอดผู้เข้าชม:`}</Text>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.button,
                }}
              >{` เพิ่มขึ้น 3.67%`}</Text>
            </View>
            <View
              style={{
                height: 2,
                width: 250,
                backgroundColor: Colors.light.grey,
                alignSelf: "center",
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.black,
                }}
              >{`ยอดการมองเห็น:`}</Text>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.button,
                }}
              >{` เพิ่มขึ้น 3.67%`}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
