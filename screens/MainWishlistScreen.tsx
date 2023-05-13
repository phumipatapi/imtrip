import * as React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import LottieWithText from "../components/others/LottieWithText";
import InsightTab from "./InsightTab/InsightTabbar";
import WishlistBox from "../components/Wishlist/WishlistBox";
interface Props {
  navigation: any;
}

export default function MainWishlist(props: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.light.tabBar,

      }}
    >
      <View style={{}}>
        <WishlistBox />
      </View>
    </View>
  );
}
