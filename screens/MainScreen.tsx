import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
  Dimensions,
  RefreshControl,
  TextInput,
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

interface ActivityData {
  _id: string;
  activity_detail: string;
  activity_image: string[];
  activity_name: string;
  activity_price: number;
  activity_time: number;
  activity_type: string[];
  address: string;
  address_detail: string;
  created: string;
  district: string;
  facility_food: string[];
  facility_other: string[];
  facility_travel: string[];
  is_use_to_activity: boolean;
  latitude: number;
  longtitude: number;
  participation_limit: number;
  status: string;
  updated_at: string;
}

export default function MainScreen(props: Props) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [userImage, setUserImage] = React.useState("");
  const [activityData, setActivityData] = React.useState<ActivityData[]>([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchActivityData();

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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

  const fetchActivityData = async () => {
    try {
      const response = await fetch(
        "https://clumsy-bat-handbag.cyclic.app/activity/get/all"
      );
      const data = await response.json();
      if (data.payload.data.length > 0) {
        setActivityData(data.payload.data);
      }
    } catch (error) { }
  };

  React.useEffect(() => {
    getProfile();
    fetchActivityData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.light.tabBar,
      }}
    >
      <ScrollView
        style={{ backgroundColor: Colors.light.background }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
          <HorizontalActivityList
            navigation={props.navigation}
            activityData={activityData}
          />
          <ActivityList
            navigation={props.navigation}
            activityData={activityData}
          />
        </View>
      </ScrollView>
    </View>
  );
}
