import React, { useEffect, useState } from "react";
import { Text, View, Image,ScrollView, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import ActivityBox, { ActivityBoxProps } from "./ActivityBox";
import Lottie from "lottie-react-native";
import { authen } from "../../firebase_config";
import Colors from "../../constants/Colors";
import { useIsFocused } from "@react-navigation/native";
import HorizontalActivityBox from "./HorizontalActivityBox";
import { getDistance } from "geolib";
import * as Location from 'expo-location';

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

interface ActivityListProps {
  navigation: any;
}

const HorizontalActivityList = ({ navigation }: ActivityListProps) => {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);
  const isFocused = useIsFocused();
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.05,
    longitudeDelta: 0.06,
  });
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    async function fetchActivityData() {
      try {
        const response = await fetch(
          "https://clumsy-bat-handbag.cyclic.app/activity/get/all"
        );
        const data = await response.json();
        if (data.payload.data.length > 0) {
          setActivityData(data.payload.data);
        }
      } catch (error) {
       
      }
    }

    (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
  
        if (status !== "granted") {
          Alert.alert(
            "Insufficient permissions!",
            "Sorry, we need location permissions to make this work!",
            [{ text: "Okay" }]
          );
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
  
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.02,
        });
        // searchByLatLon(location.coords.latitude, location.coords.longitude);
      })();
    fetchActivityData();
  }, []);

  const calculateDistance = (activity: ActivityData) => {
    const distance = getDistance(
      { latitude: activity.latitude, longitude: activity.longtitude },
      { latitude: location.latitude!, longitude: location.longitude!}
    );

    return distance;
  };

  const sortedActivityData =
  activityData?.length > 0
    ? [...activityData].sort(
        (a, b) => calculateDistance(a) - calculateDistance(b)
      )
    : [];

 
  const activityBoxes =
  sortedActivityData?.length > 0 ? (
        <ScrollView horizontal style={{paddingLeft: 5}} showsHorizontalScrollIndicator={false} >
        {sortedActivityData.map((activity) =>
          activity._id ? (
            <HorizontalActivityBox
             district={activity?.district}
              key={activity._id}
              price={activity?.activity_price}
              activityName={activity?.activity_name}
              activityImage={activity?.activity_image}
              viewer={0}
              booking={0}
              rating={0}
              allbooking={0}
              onPress={() =>
                navigation.push("ActivityInfo", { activityId: activity._id })
              }
            />
          ) : null
        )}
      </ScrollView>
    ) : (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          marginBottom: 30,
        }}
      >
        {activityData?.length === 0 ? (
          <>
            <Image
              source={require("../../assets/noData.jpg")}
              style={{
                width: 200,
                height: 200,
              }}
            />
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                color: Colors.light.black,
                fontSize: 20,
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              คุณยังไม่ได้สร้างกิจกรรม{"\n"}ลองสร้างกิจกรรมกันเถอะ!
            </Text>
          </>
        ) : (
          <Lottie
            source={require("../../assets/animatedIcon/loading.json")}
            autoPlay
            loop
            style={{
              width: 200,
            }}
          />
        )}
      </View>
    );

  return <View style={{
    marginTop: 20
  }}>
    <Text  style={{
                fontFamily: "Mitr_400Regular",
                color: Colors.light.black,
                fontSize: 22,
               marginBottom: 20
              }}>
        กิจกรรมใกล้เคียง
    </Text>
    {activityBoxes}
    </View>;
};

export default HorizontalActivityList;
