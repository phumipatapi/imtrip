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

const WishlistBox = () => {
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
                        ชื่อกิจกรรม
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Mitr_400Regular",
                            fontSize: 16,
                            color: Colors.light.darkGrey,
                        }}>
                        จังหวัด ประจวบคีรีขันธ์
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Mitr_400Regular",
                                color: Colors.light.darkGrey,
                                fontSize: 16,
                            }}
                        >
                            ฿ 500
                        </Text>
                        <Text
                            style={{
                                marginLeft: 5,
                                marginRight: 5,
                                fontFamily: "Mitr_400Regular",
                                color: Colors.light.grey,
                                fontSize: 16,
                            }}
                        >
                            |
                        </Text>
                        <MaterialCommunityIcons
                            name="star"
                            size={20}
                            color={Colors.light.yellow}
                        />
                        <Text
                            style={{
                                marginLeft: 5,

                                fontFamily: "Mitr_400Regular",
                                color: Colors.light.darkGrey,
                                fontSize: 16,
                            }}
                        >
                            4.00
                        </Text>
                    </View>
                </View>
                <FavoriteButton
                    styles={{ position: 'relative', left: 50, top: -10 }}
                    backgroundColor={Colors.light.tabBar} iconColor={Colors.light.red} iconSize={25} touchableSize={40} />

            </View>
        </TouchableOpacity>
    );
};

export default WishlistBox;
