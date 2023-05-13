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

export interface ActivityBoxProps {
  viewer: number;
  booking: number;
  rating: number;
  allbooking: number;
  activityName: string;
  activityImage: string[];
  district: string;
  price: number;
  
  onPress: () => void;
}

const HorizontalActivityBox = (props: ActivityBoxProps) => {
  return (
    <TouchableOpacity
      style={{
        height: 240,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width : 180,
        elevation: 5,
        
        backgroundColor: Colors.light.black,
        borderRadius: 20,
        marginRight: 20,
        marginBottom: 10
      }}
      onPress={props.onPress}
    >
      <Image
        source={require("../../assets/activityImg1.jpeg")}
        style={{
          width: "100%",
          height: "65%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          opacity: 0.9,
          resizeMode: 'cover'
        }}
      />
      <FavoriteButton backgroundColor={"rgba(0,0,0,0.6)"} iconColor={Colors.light.background} iconSize={24} touchableSize={30}/>
      {/* <View
        style={{
          position: "absolute",
          top: 40,
          left: 20,
          right: 0,
          bottom: 0,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            color: Colors.light.background,
            fontSize: 24,
          }}
        >
          {props.activityName}
        </Text>
      </View> */}

      <View
        style={{
          backgroundColor: Colors.light.background,
          height: "35%",
          borderBottomEndRadius: 20,
          borderBottomLeftRadius: 20,
          justifyContent: "center",
          padding: 10
        }}
      >
    <Text
          style={{
            fontFamily: "Mitr_600SemiBold",
            color: Colors.light.black,
            fontSize: 16,
            height: 22
          }}
        >
          {props.activityName}
        </Text> 
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            color: Colors.light.black,
            fontSize: 14,
          }}
        >
         {props.district}
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
            fontSize: 14,
          }}
        >
          ฿ {props.price}
        </Text>
        <Text
          style={{
            marginLeft: 5,
            marginRight: 5,
            fontFamily: "Mitr_400Regular",
            color: Colors.light.grey,
            fontSize: 14,
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
            fontSize: 14,
          }}
        >
         {props.rating}
        </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalActivityBox;
