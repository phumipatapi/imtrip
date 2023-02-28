import * as React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  senderName: string;
  time: string;
  lastestMessage: string;
  onPress: () => void;
}

const BookingBox = (props: Props) => {
  return (
    <TouchableOpacity style={{}} onPress={props.onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderColor: Colors.light.grey,
        }}
      >
        <Image
          source={require("../../assets/icon.png")}
          style={{
            height: 52,
            width: 52,
            resizeMode: "cover",
            borderRadius: 26,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            paddingLeft: 15,
            flex: 1,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontFamily: "Mitr_600SemiBold",
                fontSize: 18,
                color: Colors.light.button,
              }}
            >
              {props.senderName}
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 12,
                color: "green",
              }}
            >
              ชำระเงินแล้ว
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 14,
              color: Colors.light.darkGrey,
              width: "100%",
            }}
          >
            จำนวนผู้เข้าร่วม: 2 คน
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 14,
              color: Colors.light.darkGrey,
              width: "100%",
            }}
          >
            วันที่จอง: 12 มีนาคม 2564 10:00 น.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookingBox;
