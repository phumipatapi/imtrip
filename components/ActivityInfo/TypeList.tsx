import * as React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";


interface Props {
    type: string[];
}

const TypeList = (props: Props) => {
    return (
        <View
            style={{
                flexDirection: "row",
                flexWrap: "wrap",
                paddingVertical: 10,
            }}
        >
            {props.type.map((item, index) => {
                return (
                    <View
                        key={index}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: Colors.light.button,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            borderRadius: 15,
                            marginRight: 10,
                            marginBottom: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Mitr_400Regular",
                                fontSize: 18,
                                color: Colors.light.tabBar,
                            }}
                        >
                            {item}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
};

export default TypeList;
