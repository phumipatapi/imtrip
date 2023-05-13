import {
    useEffect,
    useState,
} from "react";
import { Text, View, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import ChatBox from "../../components/Messages/chatBox";
import LottieWithText from "../../components/others/LottieWithText";
import Colors from "../../constants/Colors";
import { useIsFocused } from "@react-navigation/native";

import RNDateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import { activity } from "../model/createActivity";
import Lottie from "lottie-react-native";


interface Props {
    navigation: any;

    route: any;
}


export default function SuccessPayment(props: Props) {
    //   const [activityData, setActivityData] = React.useState<ActivityData[]>([]);


    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.light.background,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Lottie source={require('../../assets/animatedIcon/success.json')} autoPlay loop style={{
                width: 200,
                height: 200,
            }} />
            <Text
                style={{
                    fontFamily: "Mitr_400Regular",
                    fontSize: 20,
                    color: Colors.light.black,
                    marginLeft: 10,
                }}
            >
                การจองสำเร็จ!

            </Text>
            <Text
                style={{
                    fontFamily: "Mitr_400Regular",
                    fontSize: 18,
                    color: Colors.light.darkGrey,
                    marginLeft: 10,
                    textAlign: 'center',
                }}
            >
                คุณได้จองกิจกรรมเรียบร้อยแล้ว{'\n'}เตรียมตัวเที่ยวกันเถอะ!
            </Text>
            <TouchableOpacity
                onPress={
                    () => {
                        props.navigation.navigate("Home");
                    }
                }
                style={{
                    backgroundColor: Colors.light.button,
                    padding: 15,
                    borderRadius: 10,
                    marginTop: 20,
                    marginBottom: 20,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Text style={{
                    fontFamily: "Mitr_400Regular",
                    fontSize: 20,
                    color: Colors.light.tabBar,
                }}>
                    กลับสู่หน้าหลัก
                </Text>
            </TouchableOpacity>

        </View>
    )
}
