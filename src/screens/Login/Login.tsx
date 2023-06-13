import React, { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@rneui/themed";
import { View, Text, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import useTranslate from "@/hooks/useTranslate";
import axios from "@/networking";
import { styles } from "@/screens/Login/styles";
import User from "@/store/actions/UserActions";

export const Login = (): React.ReactElement => {
  const { translate } = useTranslate();

  const userReducer = new User(useDispatch());
  const userState = useSelector((state: any) => state.userReducer);

  // dummy
  const test = async (): Promise<void> => {
    axios
      .get("https://reactnative.dev/movies.json")
      .then((response) => {
        if (response && response.data) {
          Alert.alert("userData", JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        Alert.alert("Error", error);
      });
  };

  useEffect(() => {
    AsyncStorage.setItem("userData", "Leyla Mammadova");
    userReducer.addUserData("Leyla Mammadova");
  }, []);

  useEffect(() => {
    userState.userData.length > 0 &&
      Alert.alert("userData", userState.userData);
  }, [userState.userData]);

  return (
    <View style={styles.container}>
      <Text>{translate("login.header")}</Text>
      <Button onPress={test} title={translate("login.button")} />
    </View>
  );
};
