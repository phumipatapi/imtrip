import * as React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  senderName: string;
  time: string;
  lastestMessage: string;
}

const ChatBox = (props: Props) => {
  return (
    <TouchableOpacity style={{}}>
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
                color: Colors.light.black,
              }}
            >
              {props.time}
            </Text>
          </View>
          <Text
            numberOfLines={2}
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 16,
              color: Colors.light.grey,
              width: "100%",
            }}
          >
            {props.lastestMessage}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatBox;
