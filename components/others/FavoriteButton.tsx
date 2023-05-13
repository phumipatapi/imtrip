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
  backgroundColor: string;
  iconColor: string;
  iconSize: number;
  touchableSize: number;
  styles?: any;
}

const FavoriteButton = (props: Props) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        width: props.touchableSize,
        height: props.touchableSize,
        borderRadius: props.touchableSize / 2,
        backgroundColor: isFavorite ? Colors.light.background : props.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        ...props.styles
      }}

      onPress={() => {
        setIsFavorite(!isFavorite);
      }
      }

    >
      <MaterialCommunityIcons name="heart-outline" size={props.iconSize} color={
        isFavorite ? Colors.light.red : props.iconColor

      } />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
