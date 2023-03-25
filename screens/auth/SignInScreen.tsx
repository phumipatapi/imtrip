import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image,
  Dimensions
} from "react-native";
import * as Google from 'expo-auth-session/providers/google';
import Colors from "../../constants/Colors";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



interface Props {
  navigation: any;
  route: any;
  setAccessToken: (token: string) => void;
}

export default function SignInScreen(prop: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setToken] = useState("");


  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "185724017243-8d2qm44oq8mbe03if64rardrfckf5dcg.apps.googleusercontent.com",
    iosClientId: "185724017243-l49nqmh5vcajm98rnsdr7t92vrunvvrk.apps.googleusercontent.com",
    expoClientId: "185724017243-qfuii7ki7o2oh4pmlgl5okin8b3hpfa5.apps.googleusercontent.com",
  })

  const saveAccessToken = async (accessToken: string) => {
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
    } catch (error) {
      console.log('Error saving access token:', error);
    }
  };



  const getUserData = async (accessToken: string) => {
    try {
      const response = await axios.get('https://people.googleapis.com/v1/people/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,

        },
        params: {
          personFields: 'names,emailAddresses,photos',
        },
      });

      await AsyncStorage.setItem('userName', response.data.names[0].displayName);
      await AsyncStorage.setItem('userImage', response.data.photos[0].url);
      await AsyncStorage.setItem('userEmail', response.data.emailAddresses[0].value);


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response.authentication?.accessToken!);
      getUserData(response.authentication?.accessToken!);
      saveAccessToken(response.authentication?.accessToken!);

      prop.setAccessToken(accessToken);
    }
  }, [response, prop.setAccessToken]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.light.tabBar,
        paddingHorizontal: 30,
        paddingTop: 20,
        justifyContent: 'center'

      }}
    >
      <Image source={require("../../assets/backpacker.png")} style={{ alignSelf: "center" }} />

      <Text style={{
        fontFamily: "Mitr_400Regular",
        fontSize: 24,
        color: Colors.light.black,
        marginTop: 20
      }} >เข้าสู่ระบบ</Text>

      <TextInput
        style={{
          borderColor: Colors.light.grey,
          borderWidth: 1,
          borderRadius: 10,
          padding: 15,
          marginTop: 10,
          fontFamily: "Mitr_400Regular",
          fontSize: 18,
        }}
        onChangeText={setEmail}
        value={email}
        placeholder="อีเมล"
      />
      <TextInput
        style={{
          borderColor: Colors.light.grey,
          borderWidth: 1,
          borderRadius: 10,
          padding: 15,
          marginTop: 10,
          fontFamily: "Mitr_400Regular",
          fontSize: 18,
        }}
        onChangeText={setPassword}
        value={password}
        placeholder="รหัสผ่าน"
      />

      <TouchableOpacity
        onPress={() => {
          //normal
        }}
        style={{
          backgroundColor:
            Colors.light.button,
          width: Dimensions.get("window").width - 60,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Mitr_400Regular",
            fontSize: 20,
            color: Colors.light.background,
          }}
        >
          เข้าสู่ระบบ
        </Text>
      </TouchableOpacity>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      }}>
        <View style={{
          flex: 1,
          height: 1,
          backgroundColor: Colors.light.grey,
        }} />
        <Text style={{
          fontFamily: "Mitr_400Regular",
          fontSize: 18,
          color: Colors.light.grey,
          marginHorizontal: 10,
        }}>หรือ</Text>
        <View style={{
          flex: 1,
          height: 1,
          backgroundColor: Colors.light.grey,
        }} />

      </View>
      <TouchableOpacity style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 15 }} onPress={() => promptAsync()}>
        <Image source={require('../../assets/google.png')} style={{ width: 80, height: 80 }} />
      </TouchableOpacity>

    </View>
  );
}
