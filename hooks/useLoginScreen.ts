import { useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";
import { decode } from "../utils/token";
import { Alert, Keyboard } from "react-native";
import { FormikHelpers } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

export type LoginT = {
  email: string;
  password: string;
};

export interface useLoginScreenProps {
  navigation: any;
}

export const useLoginScreen = ({ navigation }: useLoginScreenProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    const checkSession = async () => {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        navigation.navigate("Home");
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (
    values: LoginT,
    helpers: FormikHelpers<LoginT>
  ) => {
    try {
      const response = await fetcher("/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const { access_token } = response;
      const { username } = decode(access_token)!;
      await AsyncStorage.setItem("username", username);
      await SecureStore.setItemAsync("token", access_token);
      helpers.resetForm();
      Keyboard.dismiss();
      navigation.navigate("Home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return {
    showPassword,
    setShowPassword,
    handleLogin,
  };
};
