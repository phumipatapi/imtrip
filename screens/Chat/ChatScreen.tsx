import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { authen, db } from "../../firebase_config";

import { GiftedChat, IMessage } from "react-native-gifted-chat";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const Chat = ({ navigation }: { navigation: any }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [userName, setUserName] = React.useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Image
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
            }}
            source={{ uri: authen?.currentUser?.photoURL! }}
          />
          {/* <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} /> */}
        </View>
      ),
    });

    const q = query(collection(db, "chats"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  React.useEffect(() => {
    // Fetch the user list from the Firestore "users" collection
    async function fetchUserList() {
      const usersCollectionRef = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollectionRef);
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      setUserName(usersList[0].name);
    }

    fetchUserList();
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];

    addDoc(collection(db, "chats"), { _id, createdAt, text, user });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: authen?.currentUser?.email!,
        name: authen?.currentUser?.displayName!,
        avatar: authen?.currentUser?.photoURL!,
      }}
    />
  );
};

export default Chat;
