import * as React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    StatusBar,
    Dimensions,
    TextInput
} from "react-native";
import Colors from "../constants/Colors";
import ActivityBox from "../components/MainScreen/ActivityBox";
import { Button } from "react-native-paper";
import { activity } from "./model/createActivity";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ActivityList from "../components/MainScreen/ActivityList";
import { ScrollView } from "react-native-gesture-handler";
import { authen } from "../firebase_config";
import HorizontalActivityBox from "../components/MainScreen/HorizontalActivityBox";
import HorizontalActivityList from "../components/MainScreen/HorizontalActivityList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
    navigation: any;
}

export default function SearchScreen(props: Props) {

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: Colors.light.tabBar,
                paddingHorizontal: 30,
            }}
        >
            <View style={{ flexDirection: 'row',alignItems: 'center', display:'flex' }}>
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
            size={40}
            color={Colors.light.grey}
          />
        </TouchableOpacity>
                <TextInput
                    style={{
                        marginLeft: 10,
                        borderRadius: 15,
                        paddingHorizontal: 10,
                        borderColor: Colors.light.grey,
                        backgroundColor: "#FFF",
                        // borderWidth: 1,
                        height: 45,
                        fontSize: 18,
                        fontFamily: "Mitr_400Regular",
                        flex: 1,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 1,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 2,
                        // marginHorizontal: 20,
                    }}
                    placeholder={"ค้นหากิจกรรม"}
                   
                />
            </View>
            <ScrollView>
                <View style={{ marginTop: 20 }}>
                    <Text

                        style={{
                            fontSize: 18,
                            fontFamily: "Mitr_400Regular",
                            color: Colors.light.grey,
                           
                        }}
                    >
                        จังหวัด
                    </Text>
                    <View
        style={{
          marginTop: 0,
          borderBottomColor: Colors.light.grey,
          borderBottomWidth: 1,
        }}
      />
                    </View>
                    <View style={{ marginTop: 20 }}>
                    <Text

                        style={{
                            fontSize: 18,
                            fontFamily: "Mitr_400Regular",
                            color: Colors.light.grey,
                           
                        }}
                    >
                        กิจกรรม
                    </Text>
                    <View
        style={{
          marginTop: 0,
          borderBottomColor: Colors.light.grey,
          borderBottomWidth: 1,
        }}
      />
                    </View>
            </ScrollView>




        </View>
    );
}
