import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { Agenda, LocaleConfig } from "react-native-calendars";
import Colors from "../constants/Colors";
import LottieWithText from "../components/others/LottieWithText";

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

export default function MainPlanningScreen(props: Props) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Asia/Bangkok",
  };

  const mockItems: Items = {
    "2023-03-29": [
      {
        name: "Meeting with team",
        member: "John, Sarah, Mike",
        date: "2023-03-29",
      },
      {
        name: "Interview with candidate",
        member: "David",
        date: "2023-03-29",
      },
    ],
    "2023-03-30": [
      {
        name: "John",
        member: "5",
        date: "2023-03-30",
      },
      {
        name: "จิราพร งิ้วแดง",
        member: "3",
        date: "2023-03-30",
      },
    ],
  };
  const [items, setItems] = useState<Items>(mockItems);

  const loadItems = (day: any) => {};

  const renderEmpty = () => {
    const animatedSource = require("../assets/animatedIcon/calendar.json");
    const lottieWidth = "60%";
    const title = "ยังไม่มีการจองกิจกรรมในวันนี้";
    const subTitle =
      "ยังมีเวลาเหลืออยู่ ลองสร้างกิจกรรมที่น่าสนใจเพื่อดึงดูดนักท่องเที่ยว";

    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 30,
          backgroundColor: Colors.light.background,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <LottieWithText
          animatedSource={animatedSource}
          lottieWidth={lottieWidth}
          title={title}
          subTitle={subTitle}
        />
      </View>
    );
  };
  const renderItem = (item: Item) => {
    return (
      <TouchableOpacity
        style={{
          marginRight: 10,
          marginTop: 17,
        }}
        onPress={() => {
          props.navigation.navigate("BookingDetail");
        }}
      >
        <Card style={{ backgroundColor: Colors.light.lightGreen }}>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Mitr_600SemiBold",
                    fontSize: 22,
                    color: Colors.light.background,
                    maxWidth: "80%",
                  }}
                >
                  คุณ {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "Mitr_400Regular",
                    fontSize: 16,
                    color: Colors.light.background,
                  }}
                >
                  จำนวน: {item.member} คน
                </Text>
                <Text
                  style={{
                    fontFamily: "Mitr_400Regular",
                    fontSize: 16,
                    color: Colors.light.background,
                  }}
                >
                  วันที่เข้าร่วม:{"\n"}
                  {new Date(item.date).toLocaleString("th-TH", options)}
                </Text>
              </View>

              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={Date()}
        renderItem={renderItem}
        calendarStyle={{}}
        renderEmptyData={() => renderEmpty()}
        contentContainerStyle={{}}
        theme={{
          selectedDayBackgroundColor: Colors.light.button,
          dotColor: Colors.light.button,
          agendaTodayColor: Colors.light.button,
          textDayFontFamily: "Mitr_400Regular",
        }}
      />
    </View>
  );
}
