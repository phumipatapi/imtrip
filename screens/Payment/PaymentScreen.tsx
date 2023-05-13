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


interface Props {
    navigation: any;

    route: any;
}


export default function PaymentScreen(props: Props) {
    //   const [activityData, setActivityData] = React.useState<ActivityData[]>([]);
    const isFocused = useIsFocused();

    const [open2, setOpen2] = useState(false);

    const [people, setPeople] = useState('1');
    const [peopleList, setPeopleList] = useState<{ label: string; value: string; }[]>([]);


    useEffect(() => {
        // Generate people options based on limit_people
        const options: { label: string; value: string; }[] = [];
        for (let i = 1; i <= activityData.participation_limit; i++) {
            options.push({ label: `${i} คน`, value: `${i}` });
        }
        setPeopleList(options);
    }, []);

    const { activityData } = props.route.params;


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1, backgroundColor: Colors.light.background, paddingHorizontal: 30 }}>
                <View style={{
                    borderBottomColor: Colors.light.grey,
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                }}>
                    <Text style={{
                        fontFamily: "Mitr_400Regular",
                        fontSize: 20,
                        color: Colors.light.black,
                        marginTop: 20,
                    }}>
                        {
                            activityData.activity_name
                        }
                    </Text>
                    <Text style={{
                        fontFamily: "Mitr_400Regular",
                        fontSize: 18,
                        color: Colors.light.darkGrey,

                    }}>
                        {
                            activityData.activity_detail
                        }
                    </Text></View>
                <View style={{
                    flexDirection: "column",

                    marginTop: 10
                }}>
                    <Text style={{
                        fontFamily: "Mitr_400Regular",
                        fontSize: 20,
                        color: Colors.light.black,
                        marginRight: 10

                    }}>
                        จองวันที่
                    </Text>
                    <RNDateTimePicker minuteInterval={30} value={
                        new Date()
                    } mode="datetime"
                        style={{
                            alignSelf: 'flex-start',
                            marginTop: 10,

                        }}
                    />
                </View>
                <View style={{
                    borderBottomColor: Colors.light.grey,
                    borderBottomWidth: 1,
                    paddingBottom: 20,
                }}>
                    <Text
                        style={{
                            fontFamily: "Mitr_400Regular",
                            fontSize: 20,
                            color: Colors.light.black,
                            marginTop: 20,
                        }}
                    >
                        จำนวนผู้เข้าร่วม
                    </Text>
                    <DropDownPicker
                        placeholder="จำนวนคน"
                        placeholderStyle={{ color: Colors.light.grey }}
                        textStyle={{ fontFamily: "Mitr_400Regular", fontSize: 18 }}
                        open={open2}
                        value={
                            people
                        }
                        items={peopleList}
                        setOpen={setOpen2}
                        setValue={setPeople}
                        setItems={setPeopleList}
                        multiple={false}
                        mode="SIMPLE"
                        style={{
                            borderColor: Colors.light.grey,
                            marginTop: 10,
                            padding: 15,
                        }}
                        showBadgeDot={false}
                        listMode="SCROLLVIEW"
                        zIndex={9999}
                        dropDownDirection="TOP"


                    /></View>
                <View style={{
                    borderBottomColor: Colors.light.grey,
                    borderBottomWidth: 1,
                    paddingBottom: 20,
                }}>

                    <Text
                        style={{
                            fontFamily: "Mitr_400Regular",
                            fontSize: 20,
                            color: Colors.light.black,
                            marginTop: 20,
                        }}
                    >
                        สรุปราคา
                    </Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <Text

                            style={{
                                fontFamily: "Mitr_400Regular",
                                fontSize: 18,
                                color: Colors.light.darkGrey,
                                marginTop: 10,
                            }}
                        >
                            ฿ {
                                activityData.activity_price
                            } x {
                                people
                            } คน
                        </Text>
                        <View style={{ flexDirection: "row", }}>
                            <Text

                                style={{
                                    fontFamily: "Mitr_400Regular",
                                    fontSize: 18,
                                    color: Colors.light.black,
                                    marginTop: 10,
                                }}
                            >
                                รวม
                            </Text>
                            <Text

                                style={{
                                    fontFamily: "Mitr_400Regular",
                                    fontSize: 20,
                                    color: Colors.light.button,
                                    marginTop: 10,
                                    marginLeft: 10,

                                }}
                            >
                                ฿ {
                                    activityData.activity_price * parseInt(people)
                                }
                            </Text></View>
                    </View>

                </View>

                <View style={{ flex: 1 }}></View>
                <Text style={{
                    fontFamily: "Mitr_400Regular",
                    fontSize: 14,
                    marginTop: 10


                }}>
                    เมื่อกดยืนยันจองแล้ว แสดงว่าคุณได้ยอมรับ{' '}
                    <Text style={{ color: Colors.light.button }} onPress={
                        () => {
                            props.navigation.navigate("TermCondition");
                        }

                    }>ข้อตกลงและเงื่อนไข</Text>{' '}
                    ของเราแล้ว

                </Text>

                <TouchableOpacity
                    onPress={
                        () => {
                            props.navigation.navigate("ChoosePayment");
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
                        ยืนยัน
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
