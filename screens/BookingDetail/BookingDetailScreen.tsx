import * as React from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import ChatBox from "../../components/Messages/chatBox";
import LottieWithText from "../../components/others/LottieWithText";
import Colors from "../../constants/Colors";
import ActivityInfoTab from "../../components/ActivityInfo/Tabbar";

export default function BookingDetailScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.light.tabBar,
        paddingHorizontal: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 18,
            color: Colors.light.button,
          }}
        >
          Booking No.
        </Text>
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 18,
            color: Colors.light.button,
          }}
        >
          12345678
        </Text>
      </View>
      <View
        style={{
          height: 240,
          borderRadius: 20,
          marginTop: 20,
          backgroundColor: Colors.light.black,
        }}
      >
        <Image
          source={require("../../assets/activityImg1.jpeg")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
            opacity: 0.5,
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: "Mitr_400Regular",
          fontSize: 30,
          color: Colors.light.button,
          marginTop: 20,
        }}
      >
        มาสานตะกร้ากันเถอะ
      </Text>
      <Text
        style={{
          fontFamily: "Mitr_400Regular",
          fontSize: 18,
          color: Colors.light.darkGrey,
          marginTop: 10,
        }}
      >
        18 มีนาคม 2564 17:30
      </Text>
      <View
        style={{
          marginTop: 20,
          borderBottomColor: Colors.light.grey,
          borderBottomWidth: 1,
        }}
      />
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.darkGrey,
              width: 130,
            }}
          >
            ชื่อผู้จอง
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
              marginLeft: 20,
            }}
          >
            ธนพล สุขสวัสดิ์
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.darkGrey,

              width: 130,
            }}
          >
            เบอร์โืทรติดต่อ
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
              marginLeft: 20,
            }}
          >
            0812345678
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.darkGrey,

              width: 130,
            }}
          >
            จำนวนผู้เข้าร่วม
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
              marginLeft: 20,
            }}
          >
            10 คน
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.darkGrey,
              marginTop: 20,
            }}
          >
            วันที่จอง
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
              marginTop: 10,
            }}
          >
            18 มีนาคม 2564
          </Text>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 50 }}>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.darkGrey,
              marginTop: 20,
            }}
          >
            เวลา
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
              marginTop: 10,
            }}
          >
            17:30
          </Text>
        </View>
      </View>
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
      >
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 18,
            color: Colors.light.background,
          }}
        >
          คุยกับผู้จอง
        </Text>
      </TouchableOpacity>
    </View>
  );
}
