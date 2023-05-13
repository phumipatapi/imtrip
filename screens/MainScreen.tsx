import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
  Dimensions,
  TextInput
} from "react-native";
import Colors from "../constants/Colors";
import ActivityBox from "../components/MainScreen/ActivityBox";
import { Button } from "react-native-paper";
import { activity } from "./model/createActivity";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ActivityList from "../components/MainScreen/ActivityList";
import { ScrollView } from "react-native-gesture-handler";
import { authen } from "../firebase_config";
import HorizontalActivityBox from "../components/MainScreen/HorizontalActivityBox";
import HorizontalActivityList from "../components/MainScreen/HorizontalActivityList";

interface Props {
  navigation: any;
}

export default function MainScreen(props: Props) {
  const [userName, setUserName] = React.useState("");
  const [userImage, setUserImage] = React.useState("");

  const getProfile = async () => {
    try {
      const name = await AsyncStorage.getItem("userName");
      const image = await AsyncStorage.getItem("userImage");
      if (name !== null && image !== null) {
        setUserName(name);
        setUserImage(image);
      }
    } catch (error) {
      console.log("Error getting access token:", error);
    }
  };

  React.useEffect(() => {
    getProfile();
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.light.tabBar,
      }}
    >
      <ScrollView style={{ backgroundColor: Colors.light.background }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: Colors.light.tabBar,
            paddingHorizontal: 30,
            paddingTop:
              Platform.OS == "android"
                ? StatusBar.currentHeight != null
                  ? StatusBar.currentHeight + 20
                  : 30
                : 10,
            paddingBottom: 30,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontFamily: "Mitr_400Regular", fontSize: 24 }}>
                ยินดีต้อนรับ!
              </Text>
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  fontSize: 22,
                  color: Colors.light.grey,
                }}
              >
                {authen.currentUser?.displayName}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => props.navigation.navigate("Setting")}
            >
              {userImage == "" ? (
                <Image
                  source={require("../assets/displayImage.png")}
                  style={{
                    height: 52,
                    width: 52,
                    resizeMode: "contain",
                    borderRadius: 26,
                  }}
                />
              ) : (
                <Image
                  source={{ uri: userImage }}
                  style={{
                    height: 52,
                    width: 52,
                    resizeMode: "cover",
                    borderRadius: 26,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              style={{
                marginTop: 20,
                borderRadius: 15,
                paddingHorizontal: 10,
                borderColor: Colors.light.grey,
                backgroundColor: "#FFF",
                borderWidth: 1,
                height: 45,
                fontSize: 18,
                fontFamily: "Mitr_400Regular",
                // marginHorizontal: 20,
              }}
              placeholder={"ค้นหากิจกรรม"}
              onPressIn={() => props.navigation.navigate("Search")}
            />
          </View>
          <HorizontalActivityList navigation={props.navigation} />
          <ActivityList navigation={props.navigation} />
        </View>
      </ScrollView>

    </View>
  );
}
