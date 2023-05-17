import * as React from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import ChatBox from "../../components/Messages/chatBox";
import LottieWithText from "../../components/others/LottieWithText";
import Colors from "../../constants/Colors";
import ActivityInfoTab from "../../components/ActivityInfo/Tabbar";
import { ScrollView } from "react-native-gesture-handler";
import { authen } from "../../firebase_config";

interface Props {
  navigation: any;
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

export default function BookingDetailScreen(
  props: Props
) {
  const [activityData, setActivityData] = React.useState<ActivityData[]>([]);


  const { activityId, bookingId, activityName, date, status, people } = props.route.params;
  React.useEffect(() => {
    async function fetchActivityData() {
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
  }, []);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.light.tabBar,
          paddingHorizontal: 30,
          paddingBottom: 30
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.button,
            }}
          >
            Booking No.
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.button,
            }}
          >
            {
              "ITM-" + bookingId.substring(bookingId.length - 5)
            }
          </Text>
        </View>
        <View
          style={{
            height: 240,
            borderRadius: 20,
            marginTop: 20,
            backgroundColor: Colors.light.black,
          }}
        >
          <Image
            source={require("../../assets/activityImg1.jpeg")}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
              opacity: 0.5,
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 30,
            color: Colors.light.button,
            marginTop: 20,
          }}
        >
          {
            activityName}
        </Text>
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 18,
            color: Colors.light.darkGrey,
            marginTop: 10,
          }}
        >
          {/* {
            // props.date
            new Date(date).toLocaleDateString('th-TH', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          } {
            new Date(date).toLocaleTimeString('th-TH', {
              hour: '2-digit',
              minute: '2-digit',
            })

          } น. */}
          {
            activityData[0]?.activity_detail
          }
        </Text>
        <View
          style={{
            marginTop: 20,
            borderBottomColor: Colors.light.grey,
            borderBottomWidth: 1,
          }}
        />
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 18,
                color: Colors.light.darkGrey,
                width: 130,
              }}
            >
              ชื่อผู้จอง
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 20,
                color: Colors.light.black,
                marginLeft: 20,
              }}
            >
              {
                authen.currentUser?.displayName
              }
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
          >
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 18,
                color: Colors.light.darkGrey,

                width: 130,
              }}
            >
              จำนวนผู้เข้าร่วม
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 20,
                color: Colors.light.black,
                marginLeft: 20,
              }}
            >
              {
                people
              } คน
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
          >
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 18,
                color: Colors.light.darkGrey,

                width: 130,
              }}
            >
              สถานะ
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 20,
                color: status === "pending" ? Colors.light.darkGrey : Colors.light.lightGreen,
                marginLeft: 20,
              }}
            >
              {
                status === "pending" ? "รอการยืนยัน" : "ยืนยันแล้ว"
              }
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 18,
                color: Colors.light.darkGrey,
                marginTop: 20,
              }}
            >
              วันที่จอง
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 20,
                color: Colors.light.black,
                marginTop: 10,
              }}
            >
              {
                new Date(date).toLocaleDateString('th-TH', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }
            </Text>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 50 }}>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 18,
                color: Colors.light.darkGrey,
                marginTop: 20,
              }}
            >
              เวลา
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 20,
                color: Colors.light.black,
                marginTop: 10,
              }}
            >
              {

                new Date(date).toLocaleTimeString('th-TH', {
                  hour: '2-digit',
                  minute: '2-digit',
                })

              }
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: Colors.light.button,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            marginTop: 40,
            elevation: 3,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.background,
            }}
          >
            คุยกับเจ้าของกิจกรรม
          </Text>
        </TouchableOpacity>
      </View></ScrollView>
  );
}
