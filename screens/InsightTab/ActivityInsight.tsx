import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Colors from "../../constants/Colors";
import { DonutChart } from "react-native-circular-chart";
import { ScrollView } from "react-native-gesture-handler";
import { authen } from "../../firebase_config";

const ActivityInsight: React.FC = ({ }) => {
  const [bookingData, setBookingData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchBooking();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const fetchBooking = async () => {
    try {
      const response = await fetch(
        "https://clumsy-bat-handbag.cyclic.app/booking/get_by_created_id/" +
        authen.currentUser?.uid
      );
      const data = await response.json();
      setBookingData(data.payload.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchBooking();
  }, []);

  const [open, setOpen] = React.useState(false);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const data = [
    {
      label: "Option 1 Data",
      value: "option1",
      info: "This is the data for option 1.",
    },
    {
      label: "Option 2 Data",
      value: "option2",
      info: "This is the data for option 2.",
    },
    {
      label: "Option 3 Data",
      value: "option3",
      info: "This is the data for option 3.",
    },
  ];

  const [selectedOption, setSelectedOption] = React.useState(options[0].value);

  const [items, setItems] = React.useState([]);
  const filteredData = data.filter((item) => item.value === selectedOption);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.light.tabBar,
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 30,
      }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <DropDownPicker
          placeholder="ระยะเวลา"
          placeholderStyle={{ color: Colors.light.grey }}
          textStyle={{ fontFamily: "Mitr_400Regular", fontSize: 18 }}
          open={open}
          value={selectedOption}
          items={options}
          setOpen={setOpen}
          setValue={setSelectedOption}
          mode="SIMPLE"
          style={{
            borderColor: Colors.light.grey,
            marginTop: 10,
            padding: 15,
          }}
          listMode="SCROLLVIEW"
        />
        {/* {filteredData.length > 0 ? (
        <View>
          <Text>{filteredData[0].label}</Text>
          <Text>{filteredData[0].info}</Text>
        </View>
      ) : (
        <Text>No data available for selected option</Text>
      )} */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "#EDF1D6",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/insight.png")}
            />
          </View>

          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
              marginLeft: 20,
            }}
          >
            กิจกรรม: ห่มทรายคลายเครียด
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <DonutChart
            data={[
              {
                name: "คน",
                value: 40,
                color: Colors.light.lightGreen,
              },
              {
                name: "คน",
                value: 60,
                color: "#F3E9DD",
              },
            ]}
            strokeWidth={15}
            radius={90}
            containerWidth={105 * 2}
            containerHeight={105 * 2}
            type="round"
            startAngle={0}
            endAngle={360}
            animationType="slide"
            labelValueStyle={{
              fontFamily: "Mitr_600SemiBold",
            }}
            labelTitleStyle={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
            }}
          />
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.black,
              marginTop: 20,
              textAlign: "center",
            }}
          >
            มีผู้เห็นกิจกรรมนี้ คิดเป็น 40% {"\n"}ของผู้ใช้งานทั้งหมด
          </Text>
          <View
            style={{
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <DonutChart
              data={[
                {
                  name: "คน",
                  value: 1300,
                  color: Colors.light.lightGreen,
                },
                {
                  name: "คน",
                  value: 60,
                  color: "#F3E9DD",
                },
              ]}
              strokeWidth={15}
              radius={90}
              containerWidth={105 * 2}
              containerHeight={105 * 2}
              type="round"
              startAngle={0}
              endAngle={360}
              animationType="slide"
              labelValueStyle={{
                fontFamily: "Mitr_600SemiBold",
              }}
              labelTitleStyle={{
                fontFamily: "Mitr_400Regular",
                fontSize: 20,
                color: Colors.light.black,
              }}
            />
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 18,
                color: Colors.light.black,
                marginTop: 20,
                textAlign: "center",
              }}
            >
              มีผู้เข้าชมรายละเอียดกิจกรรมนี้ คิดเป็น 40% {"\n"}
              ของผู้ใช้งานทั้งหมด
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivityInsight;
