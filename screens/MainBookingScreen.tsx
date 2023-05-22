import React, { useEffect, useState } from "react";
import { View, RefreshControl } from "react-native";

import Colors from "../constants/Colors";

import MyBookingBox from "../components/Booking/MyBookingBox";
import { authen } from "../firebase_config";
import { ScrollView } from "react-native-gesture-handler";
import Lottie from "lottie-react-native";

interface Props {
  navigation: any;
}

export default function MainBookingScreen(props: Props) {
  const [booking, setBooking] = useState<any[]>([])
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchBookingData = async (userid: string) => {
    try {
      const response = await fetch(
        `https://clumsy-bat-handbag.cyclic.app/booking/get_by_user_id/${userid}`
      );
      const data = await response.json();
      if (data.payload && data.payload.data) {
        setBooking(data.payload.data);
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchBookingData(
      authen.currentUser?.uid!
    );
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchBookingData(
      authen.currentUser?.uid!
    );

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <ScrollView
      style={{ backgroundColor: Colors.light.background }} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.light.tabBar,

        }}
      >
        <View style={{}}>
          {
            booking.length > 0 ? (
              booking.map((item) => (
                <MyBookingBox
                  key={item._id} navigation={undefined} route={undefined} activityName={item.activity_name} activityDistrict={item.activity_district} date={item.booking_datetime}
                  onPress={() => {
                    props.navigation.navigate("BookingDetail", {
                      activityId: item.activity_id,
                      bookingId: item._id,
                      activityName: item.activity_name,
                      date: item.booking_datetime,
                      status: item.booking_status,
                      people: item.booking_amount
                    });
                  }} />
              ))
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 100,
                  marginBottom: 30,
                  backgroundColor: Colors.light.tabBar,
                }}
              >
                <Lottie
                  source={require("../assets/animatedIcon/loading.json")}
                  autoPlay
                  loop
                  style={{
                    width: 200,
                  }}
                />
              </View>
            )
          }
        </View>
      </View></ScrollView>
  );

}
