import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Colors from "../../constants/Colors";
import { DonutChart } from "react-native-circular-chart";
import { ScrollView } from "react-native-gesture-handler";
import VerticalBarGraph from "@chartiful/react-native-vertical-bar-graph";
import BarChart from "@chartiful/react-native-vertical-bar-graph";
import BookingReport from "./MonthReport";

interface Props {
  navigation: any;
  route: any;
}

const BookingInsight = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];
  const [selectedOption, setSelectedOption] = React.useState(options[0].value);

  const [items, setItems] = React.useState([]);

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
        {/* <DropDownPicker
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
        /> */}
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
              source={require("../../assets/booking.png")}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 20,
                color: Colors.light.black,
                marginLeft: 20,
              }}
            >
              ยอดการจอง
            </Text>
            <Text
              style={{
                fontFamily: "Mitr_400Regular",
                fontSize: 18,
                color: Colors.light.darkGrey,
                marginLeft: 20,
              }}
            >
              ปี 2565
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",

            alignItems: "center",
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          <BarChart
            data={[50, 10, 20, 59]}
            labels={["Jan", "Feb", "Mar", "Apr"]}
            height={200}
            width={Dimensions.get("window").width - 60}
            barWidthPercentage={0.6}
            barColor={Colors.light.lightGreen}
            barRadius={10}
          />
        </View>
        <BookingReport navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

export default BookingInsight;
