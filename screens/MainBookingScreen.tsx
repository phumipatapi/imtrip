import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { Agenda, LocaleConfig } from "react-native-calendars";
import Colors from "../constants/Colors";
import LottieWithText from "../components/others/LottieWithText";
import WishlistBox from "../components/Wishlist/WishlistBox";
import BookingBox from "../components/ActivityInfo/BookingBox";
import MyBookingBox from "../components/Booking/MyBookingBox";

interface Item {
  name: string;
  member: string;
  date: string;
}

interface Items {
  [key: string]: Item[];
}

LocaleConfig.locales["th"] = {
  monthNames: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ],

  monthNamesShort: [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ],
  dayNames: [
    "วันอาทิตย์",
    "วันจันทร์",
    "วันอังคาร",
    "วันพุธ",
    "วันพฤหัสบดี",
    "วันศุกร์",
    "วันเสาร์",
  ],
  dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  today: "วันนี้",
};

LocaleConfig.defaultLocale = "th";

interface Props {
  navigation: any;
}

export default function MainBookingScreen(props: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.light.tabBar,

      }}
    >
      <View style={{}}>
        <MyBookingBox />
      </View>
    </View>
  );

}
