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
import axios from "axios";
import { authen } from "../../firebase_config";

interface Props {
  backgroundColor: string;
  iconColor: string;
  iconSize: number;
  touchableSize: number;
  styles?: any;
  activityId: string;
  activityName: string;
  activityDistrict: string;
  activityPrice: number;
  activityRating: number;

}

const FavoriteButton = (props: Props) => {
  const [isFavorite, setIsFavorite] = React.useState(
    false
  );

  React.useEffect(() => {
    async function fetchActivityData(id: string) {
      try {
        const response = await fetch(
          `https://clumsy-bat-handbag.cyclic.app/favorite_activity/get_by_user_id/${id}`
        );
        const data = await response.json();
        if (data.payload.data.length > 0) {
          data.payload.data.forEach((item: any) => {
            if (item.activity_id === props.activityId) {
              setIsFavorite(true);
            }
          });
        }
      } catch (error) {

      }
    }
    fetchActivityData(
      authen.currentUser?.uid!
    );
  }
  )

  async function addFavorite() {
    await axios("https://clumsy-bat-handbag.cyclic.app/favorite_activity/insert", {
      method: "POST",
      data: {
        activity_id: props.activityId,
        user_id: authen.currentUser?.uid,
        activity_name: props.activityName,
        activity_price: props.activityPrice,
        activity_rating: props.activityRating,
        activity_district: props.activityDistrict,

      },
    })
      .then((response) => response)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function deleteFavorite(
    id: string
  ) {
    await axios(`https://clumsy-bat-handbag.cyclic.app/favorite_activity/delete/${id}`, {
      method: "POST",
    })
      .then((response) => response)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
        if (isFavorite) {
          deleteFavorite(props.activityId);
        } else {
          addFavorite();
        }
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
