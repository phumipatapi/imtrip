import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import ActivityBox, { ActivityBoxProps } from "./ActivityBox";
import Lottie from "lottie-react-native";
import { authen } from "../../firebase_config";
import Colors from "../../constants/Colors";
import { useIsFocused } from "@react-navigation/native";

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
  activityData: ActivityData[];
}

const ActivityList = ({ navigation, activityData }: ActivityListProps) => {

  const isFocused = useIsFocused();


  const activityBoxes =
    activityData?.length > 0 ? (
      activityData.sort(() => Math.random() - 0.5).map((activity) =>
        activity._id ? (
          <ActivityBox
            key={activity._id}
            price={activity?.activity_price}
            district={activity?.district}
            activityName={activity?.activity_name}
            activityImage={activity?.activity_image}
            viewer={0}
            booking={0}
            rating={0}
            allbooking={0}
            onPress={() => navigation.push("ActivityInfo", { activityId: activity._id })} id={
              activity._id
            } />
        ) : null
      )
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
      กิจกรรมที่น่าสนใจ
    </Text>
    {activityBoxes}
  </View>;
};

export default ActivityList;
