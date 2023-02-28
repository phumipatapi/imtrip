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

interface Props {
  navigation: any;
  route: any;
}

export default function CreateActivityScreen(prop: Props) {
  const [city, setCity] = useState("");
  const [checked, setChecked] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
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
            คุณจัดกิจกรรมการท่องเที่ยวที่จังหวัดอะไร?
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
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
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
            onValueChange={(checked) => setChecked(checked)}
            value={checked}
          >
            <RadioButton.Item
              label="ฉันเคยจัดกิจกรรมมาก่อน"
              value="first"
              mode="android"
              labelStyle={{ fontFamily: "Mitr_400Regular", fontSize: 18 }}
              color={Colors.light.button}
              uncheckedColor={Colors.light.grey}
            />
            <RadioButton.Item
              label="ฉันไม่เคยจัดกิจกรรมมาก่อน"
              value="second"
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
              // disabled={city === "" || value.length === 0 || checked === ""}
              onPress={() => {
                prop.navigation.push("CreateActivity2");
              }}
              style={{
                backgroundColor:
                  city === "" || value.length === 0 || checked === ""
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
