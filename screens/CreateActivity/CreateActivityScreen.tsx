import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "../../constants/Colors";
import DropDownPicker from "react-native-dropdown-picker";
import { RadioButton } from "react-native-paper";
import { Activity, activity } from "../model/createActivity";


interface Props {
  navigation: any;
  route: any;
}

export default function CreateActivityScreen(prop: Props) {
  const [city, setCity] = useState(activity[0].district);
  const [useToActivity, setuseToActivity] = useState(activity[0].useToActivity);
  const [open, setOpen] = useState(false);
  const [activityType, setType] = useState(activity[0].activityType);
  const [typeList, setList] = useState([
    { label: "อาหาร", value: "อาหาร" },
    { label: "ศิลปะ", value: "ศิลปะ" },
    { label: "วัฒนธรรม", value: "วัฒนธรรม" },
    { label: "ประวัติศาสตร์", value: "ประวัติศาสตร์" },
    { label: "ธรรมชาติ", value: "ธรรมชาติ" },
    { label: "สุขภาพ", value: "สุขภาพ" },
  ]);



  return (
    <ScrollView style={{ backgroundColor: Colors.light.background }}>
      <TouchableWithoutFeedback onPress={() => setOpen(false)}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: Colors.light.tabBar,
            paddingHorizontal: 30,
            paddingTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 24,
              color: Colors.light.black,
            }}
          >
            เริ่มสร้างกิจกรรมการท่องเที่ยวเชิงสร้างสรรค์
          </Text>
          <View
            style={{
              marginTop: 20,
              borderBottomColor: Colors.light.grey,
              borderBottomWidth: 1,
            }}
          />
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
              marginTop: 20,
            }}
          >
            คุณจัดกิจกรรมการท่องเที่ยวเชิงสร้างสรรค์ในจังหวัดใด?
          </Text>
          <TextInput
            style={{
              borderColor: Colors.light.grey,
              borderWidth: 1,
              borderRadius: 10,
              padding: 15,
              marginTop: 10,
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
            }}
            onChangeText={setCity}
            value={city}
            placeholder="จังหวัด"
          />
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
              marginTop: 20,
            }}
          >
            คุณจัดกิจกรรมการท่องเที่ยวเกี่ยวกับอะไร?
          </Text>
          <DropDownPicker
            placeholder="ประเภทของกิจกรรม"
            placeholderStyle={{ color: Colors.light.grey }}
            textStyle={{ fontFamily: "Mitr_400Regular", fontSize: 18 }}
            open={open}
            value={activityType}
            items={typeList}
            setOpen={setOpen}
            setValue={setType}
            setItems={setList}
            multiple={true}
            mode="BADGE"
            style={{
              borderColor: Colors.light.grey,
              marginTop: 10,
              padding: 15,
            }}
            showBadgeDot={false}
            listMode="SCROLLVIEW"
          />
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 20,
              color: Colors.light.black,
              marginTop: 20,
            }}
          >
            คุณเคยจัดกิจกรรมการท่องเที่ยวเชิงสร้างสรรค์มาก่อนหรือไม่?
          </Text>

          <RadioButton.Group
            onValueChange={(checked) => setuseToActivity(checked)}
            value={useToActivity}
          >
            <RadioButton.Item
              label="ฉันเคยจัดกิจกรรมมาก่อน"
              value="true"
              mode="android"
              labelStyle={{ fontFamily: "Mitr_400Regular", fontSize: 18 }}
              color={Colors.light.button}
              uncheckedColor={Colors.light.grey}
            />
            <RadioButton.Item
              label="ฉันไม่เคยจัดกิจกรรมมาก่อน"
              value="false"
              mode="android"
              labelStyle={{ fontFamily: "Mitr_400Regular", fontSize: 18 }}
              color={Colors.light.button}
              uncheckedColor={Colors.light.grey}
            />
          </RadioButton.Group>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: 40,
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              disabled={
                city === "" ||
                activityType.length === 0 ||
                useToActivity === ""
              }
              onPress={() => {
                activity[0].district = city;
                activity[0].activityType = activityType;
                activity[0].useToActivity = useToActivity;

                prop.navigation.push("CreateActivity2");
              }}
              style={{
                backgroundColor:
                  city === "" ||
                    activityType.length === 0 ||
                    useToActivity === ""
                    ? Colors.light.grey
                    : Colors.light.button,
                width: 90,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  fontSize: 20,
                  color: Colors.light.background,
                }}
              >
                ต่อไป
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}


