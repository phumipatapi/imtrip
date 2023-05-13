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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


interface Props {
    navigation: any;

    route: any;
}


export default function ChoosePayment(props: Props) {
    //   const [activityData, setActivityData] = React.useState<ActivityData[]>([]);


    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.light.background,
            paddingHorizontal: 30,
            paddingVertical: 20,
        }}>
            <TouchableOpacity
                onPress={
                    () => {
                        props.navigation.navigate("SuccessPayment");
                    }
                }
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    elevation: 2, // Add elevation for the shadow effect
                    shadowColor: Colors.light.black, // Set the shadow color
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    backgroundColor: Colors.light.background,
                    padding: 15,
                    borderRadius: 10,
                }}
            >
                <MaterialCommunityIcons
                    name={"credit-card-outline"}
                    size={30}
                    color={Colors.light.black}
                />
                <Text
                    style={{
                        fontFamily: "Mitr_400Regular",
                        fontSize: 20,
                        color: Colors.light.black,
                        marginLeft: 10,
                    }}
                >
                    บัตรเครดิต/เดบิต
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={
                    () => {
                        props.navigation.navigate("SuccessPayment");
                    }
                }
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    elevation: 2, // Add elevation for the shadow effect
                    shadowColor: Colors.light.black, // Set the shadow color
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    backgroundColor: Colors.light.background,
                    padding: 15,
                    borderRadius: 10,
                    marginTop: 15
                }}
            >
                <Image source={require('../../assets/prompt-pay-logo.png')} style={{
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                }} />
                <Text
                    style={{
                        fontFamily: "Mitr_400Regular",
                        fontSize: 20,
                        color: Colors.light.black,
                        marginLeft: 10,
                    }}
                >
                    พร้อมเพย์
                </Text>
            </TouchableOpacity>
        </View>
    )
}
