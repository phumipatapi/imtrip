import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";
import Lottie from "lottie-react-native";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import BouncyCheckbox from "react-native-bouncy-checkbox";
interface Props {
  navigation: any;
  route: any;
}

export default function CreateActivityScreen8(prop: Props) {
  const [accept, setAccept] = useState(false);
  const slideData = [
    {
      image: require("../../assets/animatedIcon/time.json"),
      text: "กิจกรรมของคุณจะปิดรับการจองก่อนเวลาเริ่มกิจกรรม 2 ชั่วโมงเสมอ",
      key: "1",
    },
    {
      image: require("../../assets/animatedIcon/money.json"),
      text: "คุณจะได้รับเงินจากการจองกิจกรรมเมื่อเสร็จสิ้นกิจกรรม ",
      key: "2",
    },
    {
      image: require("../../assets/animatedIcon/check.json"),
      text: "เมื่อสิ้นสุดการสร้างกิจกรรมนี้ ทางเราจะทำการตรวจสอบข้อมูลกิจกรรมของคุณภายใน 24 ชั่วโมงก่อนที่จะเผยแพร่",
      key: "3",
    },
  ];

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          backgroundColor: Colors.light.tabBar,
          alignItems: "center",
          paddingHorizontal: 30,
          marginTop: 80,
          width: Dimensions.get("window").width,
          paddingBottom: 50,
        }}
      >
        <Lottie source={item.image} autoPlay loop style={{ width: 200 }} />
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 18,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  };
  return (
    <ScrollView style={{ backgroundColor: Colors.light.background }}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: Colors.light.tabBar,
          paddingTop: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: Colors.light.tabBar,
            paddingHorizontal: 30,
            paddingTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 24,
              color: Colors.light.black,
            }}
          >
            ใกล้เสร็จสิ้นการสร้างกิจกรรมแล้ว!
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.darkGrey,
            }}
          >
            ข้อมูลเพิ่มเติมเกี่ยวกับการสร้างกิจกรรม
          </Text>
          <View
            style={{
              marginTop: 20,
              borderBottomColor: Colors.light.grey,
              borderBottomWidth: 1,
            }}
          />
        </View>

        <FlatList
          data={slideData}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          decelerationRate={"normal"}
          scrollEventThrottle={16}
        />
        <ExpandingDot
          data={slideData}
          expandingDotWidth={30}
          scrollX={scrollX}
          inActiveDotOpacity={0.6}
          dotStyle={{
            width: 10,
            height: 10,
            backgroundColor: "#347af0",
            borderRadius: 5,
            marginHorizontal: 5,
          }}
          containerStyle={{
            position: "relative",
          }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <BouncyCheckbox
            size={25}
            fillColor={Colors.light.button}
            unfillColor={Colors.light.background}
            text="คุณยอมรับข้อตกลงและเงื่อนไขของ ImTrip"
            innerIconStyle={{ borderWidth: 2 }}
            iconStyle={{ borderColor: Colors.light.button }}
            textStyle={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.darkGrey,
              textDecorationLine: "none",
            }}
            onPress={(isChecked: boolean) => {
              setAccept(isChecked);
            }}
          />
        </View>
        <TouchableOpacity
          // disabled={accept == false ? true : false}
          onPress={() => {
            prop.navigation.push("Home");
          }}
          style={{
            backgroundColor:
              accept == false ? Colors.light.grey : Colors.light.button,
            width: Dimensions.get("window").width - 60,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.background,
            }}
          >
            สร้างกิจกรรม
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
