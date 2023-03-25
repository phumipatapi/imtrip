import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import ActivityBox, { ActivityBoxProps } from "./ActivityBox";
import Lottie from "lottie-react-native";

interface ActivityData {
    _id: string;
    activity_detail: string;
    activity_image: string[];
    activity_name: string;
    activity_price: number;
    activity_time: number;
    activity_type: string[];
    address: string;
    address_detail: string;
    created: string;
    district: string;
    facility_food: string[];
    facility_other: string[];
    facility_travel: string[];
    is_use_to_activity: boolean;
    latitude: number;
    longtitude: number;
    participation_limit: number;
    status: string;
    updated_at: string;
}


interface ActivityListProps {
    navigation: any;

}

const ActivityList = ({ navigation }: ActivityListProps) => {
    const [activityData, setActivityData] = useState<ActivityData[]>([]);

    useEffect(() => {
        async function fetchActivityData() {
            try {
                const response = await fetch(
                    "https://clumsy-bat-handbag.cyclic.app/activity/get/all"
                );
                const data = await response.json();
                setActivityData(data.payload.data);

            } catch (error) {
                console.error(error);
            }
        }

        fetchActivityData();
    }, []);


    const activityBoxes =
        activityData && activityData.length > 0
            ? activityData.map(activity => (
                <ActivityBox
                    key={activity._id}
                    activityName={activity.activity_name}
                    activityImage={activity.activity_image}
                    viewer={0}
                    booking={0}
                    rating={0}
                    allbooking={0}
                    onPress={() => navigation.push("ActivityInfo")}
                />
            ))
            : <View
                style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 100, marginBottom: 30 }}
            >
                <Lottie
                    source={require("../../assets/animatedIcon/loading.json")}
                    autoPlay
                    loop
                    style={{
                        width: 200,
                    }}
                />
            </View >;

    return <View>{activityBoxes}</View>;
};


export default ActivityList;
