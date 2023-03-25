import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import { useNavigation } from '@react-navigation/native';
interface Props {
  navigation: any;
  route: any;
}

export default function SettingScreen(prop: Props) {


  const [userName, setUserName] = React.useState<string>("");
  const [userImage, setUserImage] = React.useState<string>("");
  const getProfile = async () => {
    try {
      const name = await AsyncStorage.getItem('userName');
      const image = await AsyncStorage.getItem('userImage');
      if (name !== null && image !== null) {
        setUserName(name);
        setUserImage(image);
      }
    } catch (error) {
      console.log('Error getting access token:', error);
    }
  };
  // const handlePress = () => {
  //   prop.navigation.navigate('SignIn');
  // };

  const logOut = async () => {


    try {
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('userName');
      await AsyncStorage.removeItem('userImage');
      await AsyncStorage.removeItem('userEmail');



    } catch (error) {
      console.log('Error getting access token:', error);
    }
  }

  React.useEffect(() => {
    getProfile()
  })
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
        {userImage == "" ? <Image
          source={require("../assets/icon.png")}
          style={{
            height: 52,
            width: 52,
            resizeMode: "cover",
            borderRadius: 26,
          }}
        /> : <Image
          source={{ uri: userImage }}
          style={{
            height: 52,
            width: 52,
            resizeMode: "cover",
            borderRadius: 26,
          }}
        />}
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
            {userName}
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
        onPress={() => prop.navigation.navigate("TermCondition")}
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
          ข้อตกลงและเงื่อนไข
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => Linking.openURL("mailto:imtripth@gmail.com")}
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
        onPress={() => logOut()}
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
