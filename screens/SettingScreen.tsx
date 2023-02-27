import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";

interface Props {
  navigation: any;
  route: any;
}

export default function SettingScreen(prop: Props) {
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
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/icon.png")}
          style={{
            height: 100,
            width: 100,
            resizeMode: "cover",
            borderRadius: 50,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
            }}
          >
            Phumipat Apivansri
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.grey,
            }}
          >
            เข้าร่วมตั้งแต่ เมษายน 2564
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
          borderBottomColor: Colors.light.grey,
          borderBottomWidth: 1,
        }}
      />
      <Text
        style={{
          fontFamily: "Mitr_400Regular",
          fontSize: 18,
          color: Colors.light.grey,
        }}
      >
        ตั้งค่า
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="account-outline"
          size={24}
          color={"black"}
        />
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 20,
            color: Colors.light.black,
            marginLeft: 10,
          }}
        >
          ข้อมูลส่วนตัว
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="bell-outline" size={24} color={"black"} />
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 20,
            color: Colors.light.black,
            marginLeft: 10,
          }}
        >
          การแจ้งเตือน
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 20,
          borderBottomColor: Colors.light.grey,
          borderBottomWidth: 1,
        }}
      />
      <Text
        style={{
          fontFamily: "Mitr_400Regular",
          fontSize: 18,
          color: Colors.light.grey,
        }}
      >
        อื่น ๆ
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="file-document-outline"
          size={24}
          color={"black"}
        />
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 20,
            color: Colors.light.black,
            marginLeft: 10,
          }}
        >
          ข้อกำหนดและเงื่อนไข
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="help-circle-outline"
          size={24}
          color={"black"}
        />
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 20,
            color: Colors.light.black,
            marginLeft: 10,
          }}
        >
          ศูนย์ช่วยเหลือ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="information-outline"
          size={24}
          color={"black"}
        />
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 20,
            color: Colors.light.black,
            marginLeft: 10,
          }}
        >
          เกี่ยวกับ อิ่มทริป
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 40,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="logout" size={24} color={"red"} />
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 20,
            color: "red",
            marginLeft: 10,
          }}
        >
          ออกจากระบบ
        </Text>
      </TouchableOpacity>
    </View>
  );
}
