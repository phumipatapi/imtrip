import * as React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";


interface Props {
    facility_food: string[];
    facility_other: string[];
    facility_travel: string[];
}

const FacilityList = (
    props: Props
) => {

    return (
        <View style={{ paddingVertical: 20 }}>
            <Text
                style={{
                    fontFamily: "Mitr_400Regular",
                    fontSize: 20,
                    color: Colors.light.black,

                }}
            >
                สิ่งอำนวยความสะดวก
            </Text>
            {props.facility_food.length > 0 && (
                <View
                    style={{
                        flexDirection: "column",
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Mitr_400Regular",
                            fontSize: 20,
                            color: Colors.light.black,
                        }}
                    >
                        อาหาร
                    </Text>
                    {props.facility_food.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    borderBottomColor: Colors.light.grey,
                                    paddingVertical: 10,
                                    borderBottomWidth: 1,
                                }}
                            >
                                <Image
                                    source={require("../../assets/food.png")}
                                    style={{
                                        height: 40,
                                        width: 40,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontFamily: "Mitr_400Regular",
                                        fontSize: 18,
                                        color: Colors.light.black,
                                        marginLeft: 10,
                                    }}
                                >
                                    {item}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            )}

            {props.facility_travel.length > 0 && (
                <View
                    style={{
                        flexDirection: "column",
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Mitr_400Regular",
                            fontSize: 20,
                            color: Colors.light.black,
                        }}
                    >
                        การเดินทาง
                    </Text>
                    {props.facility_travel.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    borderBottomColor: Colors.light.grey,
                                    paddingVertical: 10,
                                    borderBottomWidth: 1,
                                }}
                            >
                                <Image
                                    source={require("../../assets/transport.png")}
                                    style={{
                                        height: 40,
                                        width: 40,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontFamily: "Mitr_400Regular",
                                        fontSize: 18,
                                        color: Colors.light.black,
                                        marginLeft: 10,
                                    }}
                                >
                                    {item}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            )}

            {props.facility_other.length > 0 && (
                <View
                    style={{
                        flexDirection: "column",
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Mitr_400Regular",
                            fontSize: 20,
                            color: Colors.light.black,
                        }}
                    >
                        อื่น ๆ
                    </Text>
                    {props.facility_other.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    borderBottomColor: Colors.light.grey,
                                    paddingVertical: 10,
                                    borderBottomWidth: 1,
                                }}
                            >
                                <Image
                                    source={require("../../assets/door_hanger.png")}
                                    style={{
                                        height: 40,
                                        width: 40,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontFamily: "Mitr_400Regular",
                                        fontSize: 18,
                                        color: Colors.light.black,
                                        marginLeft: 10,
                                    }}
                                >
                                    {item}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            )}

        </View>

    )
};

export default FacilityList;
