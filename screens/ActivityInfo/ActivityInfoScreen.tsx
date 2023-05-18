import * as React from "react";
import { Text, View, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import ChatBox from "../../components/Messages/chatBox";
import LottieWithText from "../../components/others/LottieWithText";
import Colors from "../../constants/Colors";
import { useIsFocused } from "@react-navigation/native";
import ActivityInfoTab from "../../components/ActivityInfo/Tabbar";
import Lottie from "lottie-react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FavoriteButton from "../../components/others/FavoriteButton";
import * as Linking from 'expo-linking';
import { activity } from "../model/createActivity";
import PurchaseTabbar from "../../components/others/PurchaseTabbar";
import FacilityList from "../../components/ActivityInfo/FacilityList";
import TypeList from "../../components/ActivityInfo/TypeList";
interface Props {
  navigation: any;
  activityId: string;
  route: any;
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

export default function ActivityInfoScreen(props: Props) {
  const [activityData, setActivityData] = React.useState<ActivityData[]>([]);
  const isFocused = useIsFocused();
  const { activityId } = props.route.params;

  React.useEffect(() => {
    async function fetchActivityData() {
      console.log(activityId);
      try {
        const response = await fetch(
          "https://clumsy-bat-handbag.cyclic.app/activity/get_by_id/" +
          activityId
        );
        const data = await response.json();

        setActivityData(data.payload.data);

      } catch (error) {
        console.error(error);
      }
    }

    fetchActivityData();

  }, [props]);

  return activityData && activityData.length > 0 ? (
    <View
      style={{
        flex: 1,

        backgroundColor: Colors.light.tabBar,
      }}
    >

      <View
        style={{
          height: "30%",

          backgroundColor: Colors.light.black,
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled style={{

        }}>
          {
            activityData[0].activity_image.map((image, index) => {
              return (
                <Image

                  key={index}
                  source={{ uri: image }}
                  style={{
                    width: Dimensions.get('window').width,
                    height: "100%",
                    resizeMode: "cover",
                  }}
                />
              )
            })
          }
        </ScrollView>

        <View
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            width: "100%",


          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 25,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 2,
            }}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={35}
              color={Colors.light.grey}
            />
          </TouchableOpacity>
        </View>
        <FavoriteButton backgroundColor={Colors.light.background} iconColor={Colors.light.grey} iconSize={25} touchableSize={40} activityId={
          activityData[0]._id
        } activityName={
          activityData[0].activity_name
        } activityDistrict={
          activityData[0].district
        } activityPrice={
          activityData[0].activity_price
        } activityRating={
          4.23
        } />

      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.light.background,
            paddingHorizontal: 30,
            marginTop: 10
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 24,
              color: Colors.light.black,
            }}
          >
            {activityData[0].activity_name}
          </Text>
          <View style={{ height: 120 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center', marginRight: 10, backgroundColor: '#E8EEF3', width: 100, aspectRatio: 1, justifyContent: 'center', borderRadius: 20 }}
                  onPress={() => {
                    Linking.openURL(`https://www.google.com/maps/@${activityData[0].latitude},${activityData[0].longtitude},17z`);
                  }}
                >
                  <Image source={require('../../assets/map.png')} style={{ height: 30, width: 30 }} />
                  <Text style={{ fontFamily: 'Mitr_400Regular', fontSize: 16, color: Colors.light.black, marginTop: 5 }}>แผนที่</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 10, backgroundColor: '#E8EEF3', width: 100, aspectRatio: 1, justifyContent: 'center', borderRadius: 20 }}>
                  <MaterialCommunityIcons name='star' size={30} color={Colors.light.yellow} />
                  <Text style={{ fontFamily: 'Mitr_400Regular', fontSize: 16, color: Colors.light.black, marginTop: 5 }}>{4.23}</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 10, backgroundColor: '#E8EEF3', width: 100, aspectRatio: 1, justifyContent: 'center', borderRadius: 20 }}>
                  <Image source={require('../../assets/clock.png')} style={{ height: 30, width: 30 }} />
                  <Text style={{ fontFamily: 'Mitr_400Regular', fontSize: 16, color: Colors.light.black, marginTop: 5 }}>{activityData[0].activity_time} ชั่วโมง</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 10, backgroundColor: '#E8EEF3', width: 100, aspectRatio: 1, justifyContent: 'center', borderRadius: 20 }}>
                  <MaterialCommunityIcons name='message-text-outline' size={30} color={Colors.light.black} />
                  <Text style={{ fontFamily: 'Mitr_400Regular', fontSize: 16, color: Colors.light.black, marginTop: 5 }}>ข้อความ</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
            }}
          >
            รายละเอียด
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.darkGrey,
            }}
          >
            {activityData[0].activity_detail}
          </Text>
          <TypeList type={activityData[0].activity_type} />
          {
          }
          {
            activityData[0].facility_food.length == 0 && activityData[0].facility_other.length == 0 && activityData[0].facility_travel.length == 0 ?
              null :
              <FacilityList facility_food={activityData[0].facility_food} facility_other={activityData[0].facility_other} facility_travel={activityData[0].facility_travel} />
          }
        </View></ScrollView>
      <PurchaseTabbar price={activityData[0].activity_price} onPress={
        () => {
          props.navigation.navigate("Payment", {
            activityData: activityData[0],
          });
        }} />
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: Colors.light.tabBar,
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
}
