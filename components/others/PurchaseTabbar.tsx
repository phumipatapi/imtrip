import * as React from "react";
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
} from "react-native";
import Colors from "../../constants/Colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
    price: number;
    onPress: () => void;

}

const PurchaseTabbar = (
    props: Props
) => {

    return (
        <View style={{
            height: '10%',

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            width: '100%',
            backgroundColor: Colors.light.tabBar,
            paddingHorizontal: 30,
            justifyContent: 'center',
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View>
                    <Text style={{
                        fontFamily: "Mitr_400Regular",
                        fontSize: 18,
                        color: Colors.light.black,
                    }}>
                        เริ่มต้น <Text style={{
                            fontFamily: "Mitr_600SemiBold",
                            fontSize: 18,
                            color: Colors.light.button,

                        }}>
                            {props.price} บาท
                        </Text>  / คน
                    </Text>

                </View>
                <TouchableOpacity onPress={
                    props.onPress
                }>
                    <View style={{
                        backgroundColor: Colors.light.button,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 10,
                    }}>
                        <Text style={{
                            fontFamily: "Mitr_600SemiBold",
                            fontSize: 18,
                            color: Colors.light.tabBar,

                        }}>
                            จองกิจกรรม
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default PurchaseTabbar;
