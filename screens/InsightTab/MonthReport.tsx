import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

interface InsightData {
  month: string;
  year: number;
  income: number;
  totalBookings: number;
}

const insights: InsightData[] = [
  {
    month: "มกราคม",
    year: 2022,
    income: 10000,
    totalBookings: 20,
  },
  {
    month: "กุมภาพันธ์",
    year: 2022,
    income: 15000,
    totalBookings: 30,
  },
  {
    month: "มีนาคม",
    year: 2022,
    income: 20000,
    totalBookings: 40,
  },
  {
    month: "เมษายน",
    year: 2022,
    income: 20000,
    totalBookings: 40,
  },
];

interface Props {
  navigation: any;
}

const BookingReport = (prop: Props) => {
  return (
    <View style={styles.container}>
      {insights
        .slice()
        .reverse()
        .map((insight) => (
          <TouchableOpacity
            style={styles.insight}
            key={`${insight.month}-${insight.year}`}
            onPress={() => {
              prop.navigation.navigate("MonthReport", {
                month: insight.month,
                year: insight.year,
              });
            }}
          >
            <Text style={styles.month}>
              {insight.month} {insight.year}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.totalBookings}>{`ยอดจอง:`}</Text>
              <Text
                style={{
                  ...styles.totalBookings,
                  color: Colors.light.button,
                }}
              >{` ${insight.totalBookings}`}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.totalBookings}>{`รายได้รวม:`}</Text>
              <Text
                style={{
                  ...styles.totalBookings,
                  color: Colors.light.button,
                }}
              >{` ฿${insight.income}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  insight: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderColor: Colors.light.lightGreen,
    borderWidth: 2,
  },
  month: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Mitr_400Regular",
  },
  year: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Mitr_400Regular",
  },
  income: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Mitr_400Regular",
  },
  totalBookings: {
    fontSize: 18,
    fontFamily: "Mitr_400Regular",
  },
});

export default BookingReport;
