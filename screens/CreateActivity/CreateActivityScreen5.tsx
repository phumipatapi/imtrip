import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Alert,
  Platform,
  Button,
  Image,
} from "react-native";
import Colors from "../../constants/Colors";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import { RadioButton } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ImagePickerResult } from "expo-image-picker";

interface Props {
  navigation: any;
  route: any;
}
interface ImageItem {
  uri: string;
}

export default function CreateActivityScreen5(prop: Props) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedImageIndices, setSelectedImageIndices] = useState<number[]>(
    []
  );

  const pickImage = async (index: number) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const newImage = { uri: result.assets[0].uri };
      const updatedImages = [...images];
      updatedImages[index] = newImage;
      setImages(updatedImages);
      setSelectedImageIndices([...selectedImageIndices, index]);
    }
  };
  const renderButtonOrImage = (index: number) => {
    if (selectedImageIndices.includes(index)) {
      return (
        <Image
          source={{ uri: images[index].uri }}
          style={{ width: 100, height: 100 }}
        />
      );
    } else {
      return (
        <TouchableOpacity
          style={{ backgroundColor: Colors.light.grey, borderRadius: 10 }}
          onPress={() => pickImage(index)}
        >
          <MaterialCommunityIcons
            name="plus"
            size={100}
            color={Colors.light.background}
          />
        </TouchableOpacity>
      );
    }
  };
  return (
    <ScrollView style={{ backgroundColor: Colors.light.background }}>
      <TouchableWithoutFeedback onPress={() => {}}>
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
            รูปภาพกิจกรรม
          </Text>
          <Text
            style={{
              fontFamily: "Mitr_400Regular",
              fontSize: 18,
              color: Colors.light.darkGrey,
            }}
          >
            ใส่รูปภาพกิจกรรมของคุณเพื่อเพิ่มความน่าสนใจให้กับผู้เข้าร่วมกิจกรรม
            โดยรูปภาพต้องมีความชัดเจนและแสดงถึงกิจกรรมที่จะจัด
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
              fontSize: 18,
              color: Colors.light.darkGrey,
              marginTop: 20,
            }}
          >
            ใส่รูปภาพอย่างน้อยสามรูป
          </Text>

          <View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {[...Array(6)].map((_, index) => (
                <View style={{ margin: 10 }} key={index}>
                  {renderButtonOrImage(index)}
                </View>
              ))}
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: 40,
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                borderColor: Colors.light.button,
                borderWidth: 1,
                width: 90,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
              onPress={() => prop.navigation.goBack()}
            >
              <Text
                style={{
                  fontFamily: "Mitr_400Regular",
                  fontSize: 20,
                  color: Colors.light.button,
                }}
              >
                ย้อนกลับ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={images.length < 3}
              onPress={() => {
                prop.navigation.navigate("CreateActivity5");
              }}
              style={{
                backgroundColor:
                  images.length < 3 ? Colors.light.grey : Colors.light.button,
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
