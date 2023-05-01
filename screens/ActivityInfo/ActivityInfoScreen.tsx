import * as React from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import ChatBox from "../../components/Messages/chatBox";
import LottieWithText from "../../components/others/LottieWithText";
import Colors from "../../constants/Colors";
import { useIsFocused } from "@react-navigation/native";
import ActivityInfoTab from "../../components/ActivityInfo/Tabbar";
import Lottie from "lottie-react-native";
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
      try {
        const response = await fetch(
          "https://clumsy-bat-handbag.cyclic.app/activity/get_by_id/" +
            activityId
        );
        const data = await response.json();
        console.log(data.payload.data);
        setActivityData(data.payload.data);
      } catch (error) {
        console.error(error);
      }
    }
    if (isFocused) {
      fetchActivityData();
    }
  }, [isFocused, props]);
  return activityData && activityData.length > 0 ? (
    <View
      style={{
        flex: 1,

        backgroundColor: Colors.light.tabBar,
      }}
    >
      <View
        style={{
          height: 240,

          backgroundColor: Colors.light.black,
        }}
      >
        <Image
          source={require("../../assets/activityImg1.jpeg")}
          style={{
            width: "100%",
            height: "70%",

            opacity: 0.5,
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 40,
            left: 20,
            right: 0,
            bottom: 0,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              color: Colors.light.background,
              fontSize: 30,
            }}
          >
            {activityData[0].activity_name}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.light.background,
            height: "30%",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontFamily: "Kanit_700Bold",
                  color: Colors.light.black,
                  fontSize: 20,
                }}
              >
                0
              </Text>
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.grey,
                  fontSize: RFPercentage(2),
                }}
              >
                ผู้เข้าดู
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontFamily: "Kanit_700Bold",
                  color: Colors.light.black,
                  fontSize: 20,
                }}
              >
                0
              </Text>
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.grey,
                  fontSize: RFPercentage(2),
                }}
              >
                ดำเนินการจอง
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontFamily: "Kanit_700Bold",
                  color: Colors.light.black,
                  fontSize: 20,
                }}
              >
                0
              </Text>
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.grey,
                  fontSize: RFPercentage(2),
                }}
              >
                เรทติ้ง
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontFamily: "Kanit_700Bold",
                  color: Colors.light.black,
                  fontSize: 20,
                }}
              >
                0
              </Text>
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  color: Colors.light.grey,
                  fontSize: RFPercentage(2),
                }}
              >
                จองทั้งหมด
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ActivityInfoTab />
    </View>
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
}
