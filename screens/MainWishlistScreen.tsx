import * as React from "react";
import { Text, View, RefreshControl, } from "react-native";
import Colors from "../constants/Colors";
import LottieWithText from "../components/others/LottieWithText";
import InsightTab from "./InsightTab/InsightTabbar";
import WishlistBox from "../components/Wishlist/WishlistBox";
import { authen } from "../firebase_config";
import Lottie from "lottie-react-native";
import { ScrollView } from "react-native-gesture-handler";
interface Props {
  navigation: any;
}

export default function MainWishlist(props: Props) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [favoriteActivity, setFavoriteActivity] = React.useState<any[]>([]);

  const fetchActivityData = async (id: string) => {
    try {
      const response = await fetch(
        `https://clumsy-bat-handbag.cyclic.app/favorite_activity/get_by_user_id/${id}`
      );
      const data = await response.json();
      if (data.payload && data.payload.data) {
        setFavoriteActivity(data.payload.data);


      }
    } catch (error) {

    }
  }

  React.useEffect(() => {

    fetchActivityData(
      authen.currentUser?.uid!
    );
  }
  )
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchActivityData(
      authen.currentUser?.uid!
    )

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView style={{ backgroundColor: Colors.light.background }} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.light.tabBar,

        }}
      >
        <View style={{}}>
          {
            favoriteActivity.length > 0 ? (
              favoriteActivity.map((item: any) => {
                return (
                  <WishlistBox
                    key={item._id}
                    navigation={undefined} activityId={item.activity_id} route={undefined} activityName={item.activity_name} activityDistrict={item.activity_district} activityPrice={item.activity_price} activityRating={item.activity_rating} onPress={() => {
                      props.navigation.navigate("ActivityInfo", {
                        activityId: item.activity_id,
                      });
                    }} />
                )
              })
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 100,
                  marginBottom: 30,
                  backgroundColor: Colors.light.tabBar,
                }}
              >
                <Lottie
                  source={require("../assets/animatedIcon/loading.json")}
                  autoPlay
                  loop
                  style={{
                    width: 200,
                  }}
                />
              </View>
            )
          }

        </View>
      </View></ScrollView>
  );
}
