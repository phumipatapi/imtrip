import * as React from "react";
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import Colors from "../../constants/Colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FavoriteButton from "../others/FavoriteButton";

// export interface ActivityBoxProps {
//     viewer: number;
//     booking: number;
//     rating: number;
//     allbooking: number;
//     activityName: string;
//     activityImage: string[];
//     price: number;
//     district: string;

//     onPress: () => void;
// }

interface Props {
    navigation: any;
    // activityId: string;
    route: any;
    activityName: string;
    activityDistrict: string;
    date: string;
    onPress: () => void;

}

const MyBookingBox = (
    props: Props
) => {
    return (
        <TouchableOpacity
            style={{
                height: 140,

                elevation: 5,

                backgroundColor: Colors.light.tabBar,
                borderBottomWidth: 1,
                borderColor: '#E1E1E1',
                paddingHorizontal: 30,
                paddingVertical: 20,

            }}
            onPress={props.onPress}

        >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image source={

                    require("../../assets/activityImg1.jpeg")
                }
                    style={{ width: 100, height: 100, borderRadius: 15 }}
                />
                <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20, justifyContent: 'center' }}>
                    <Text
                        style={{
                            fontFamily: "Mitr_400Regular",
                            fontSize: 20,
                            color: Colors.light.button,
                        }}>
                        {props.activityName}
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Mitr_400Regular",
                            fontSize: 16,
                            color: Colors.light.darkGrey,
                        }}>
                        จังหวัด {props.activityDistrict}
                    </Text>

                    <Text
                        style={{
                            fontFamily: "Mitr_400Regular",
                            fontSize: 16,
                            color: Colors.light.darkGrey,
                        }}>

                        {
                            // props.date
                            new Date(props.date).toLocaleDateString('th-TH', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })
                        } {
                            new Date(props.date).toLocaleTimeString('th-TH', {
                                hour: '2-digit',
                                minute: '2-digit',
                            })

                        } น.
                    </Text>
                </View>


            </View>
        </TouchableOpacity>
    );
};

export default MyBookingBox;
