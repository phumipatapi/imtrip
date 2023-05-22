import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import ActivityBox, { ActivityBoxProps } from "./ActivityBox";
import Lottie from "lottie-react-native";
import { authen } from "../../firebase_config";
import Colors from "../../constants/Colors";
import { useIsFocused } from "@react-navigation/native";
import HorizontalActivityBox from "./HorizontalActivityBox";
import { getDistance } from "geolib";
import * as Location from 'expo-location';
import axios from "axios";

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
  engagement: number;
}

interface ActivityListProps {
  navigation: any;
  activityData: ActivityData[];
}

const HorizontalActivityList = ({ navigation, activityData }: ActivityListProps) => {
  // const [activityData, setActivityData] = useState<ActivityData[]>([]);
  const isFocused = useIsFocused();
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.05,
    longitudeDelta: 0.06,
  });
  const [errorMsg, setErrorMsg] = useState();

  const updateEngagement = async (activityId: string, current_engagement: number) => {

    await axios(`https://clumsy-bat-handbag.cyclic.app/activity/update/${activityId}`, {
      method: "POST",
      data: {

        engagement: current_engagement + 1,


      },
    })
      .then((response) => response)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  useEffect(() => {

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

  }, []);

  const calculateDistance = (activity: ActivityData) => {
    const distance = getDistance(
      { latitude: activity.latitude, longitude: activity.longtitude },
      { latitude: location.latitude!, longitude: location.longitude! }
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
      <ScrollView horizontal style={{ paddingLeft: 5 }} showsHorizontalScrollIndicator={false} >
        {sortedActivityData.map((activity) =>
          activity._id && activity.status !== "cancel" ? (
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
              onPress={() => {
                updateEngagement(activity._id, activity?.engagement || 0)
                navigation.push("ActivityInfo", { activityId: activity._id })
              }} id={
                activity._id
              } />
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

        <Lottie
          source={require("../../assets/animatedIcon/loading.json")}
          autoPlay
          loop
          style={{
            width: 200,
          }}
        />

      </View>
    );

  return <View style={{
    marginTop: 20
  }}>
    <Text style={{
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
