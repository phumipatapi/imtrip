import React, { useEffect, useState } from "react";
import { Text, View, FlatList, RefreshControl } from "react-native";
import ChatBox from "../components/Messages/chatBox";
import LottieWithText from "../components/others/LottieWithText";
import Colors from "../constants/Colors";
import { authen, db } from "../firebase_config";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
  navigation: any;
}

interface Message {
  _id: string;
  createdAt: Date;
  text: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

export default function MainMessageScreen(props: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchMessage = async () => {
    const q = query(
      collection(db, "chats"),
      orderBy("createdAt", "desc"),
      // Add any additional filters if needed, e.g., where("userId", "==", currentUserId)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatMessages: Message[] = [];
      const uniqueUsers: string[] = []; // To keep track of unique users

      snapshot.docs.forEach((doc) => {
        const message: Message = {
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        };

        if (!uniqueUsers.includes(message.user.name)) {
          uniqueUsers.push(message.user.name);
          chatMessages.push(message);
        }
      });

      setMessages(chatMessages);
    });

    return () => {
      unsubscribe();
    };
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchMessage();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Fetch the latest message for each user from the Firestore "chats" collection
    fetchMessage();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.light.tabBar,
        // paddingHorizontal: 30,
      }}
    >
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        {/* <LottieWithText
        animatedSource={require("../assets/animatedIcon/message.json")}
        lottieWidth={"60%"}
        title={"คุณยังไม่มีข้อความในขณะนี้"}
        subTitle={
          "ลองสร้างกิจกรรมที่น่าสนใจ เพื่อเพิ่มโอกาสในการรับข้อความจากนักท่องเที่ยว"
        }
      /> */}
        <FlatList
          data={messages.filter((message) => message.user._id !== authen?.currentUser?.uid)}
          renderItem={({ item }) => (
            <ChatBox
              chat_user_id={

                item.user._id
              }
              chat_user={
                item.user.name.length > 20
                  ? item.user.name.substring(0, 20) + "..."
                  : item.user.name
              }
              image={item.user.avatar}
              time={messages && messages.length > 0 ? messages[0].createdAt.toLocaleString(
                'default',
                {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true
                }
              ) : ""}
              lastestMessage={
                messages && messages.length > 0
                  ? messages[0].text.length > 20
                    ? messages[0].text.substring(0, 20) + "..."
                    : messages[0].text
                  : ""
              }
              navigation={props.navigation}
            />
          )}
          keyExtractor={(chat) => chat._id}
        /></ScrollView>
    </View>
  );
}