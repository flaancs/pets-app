import { useState } from "react";
import { fetcher } from "../utils/fetcher";
import { decode } from "../utils/token";
import { Alert, Keyboard } from "react-native";
import { FormikHelpers } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

export type RegisterT = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
};

export interface useRegisterScreenProps {
  navigation: any;
}

export const useRegisterScreen = ({ navigation }: useRegisterScreenProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleRegister = async (
    values: RegisterT,
    helpers: FormikHelpers<RegisterT>
  ) => {
    try {
      await fetcher("/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const loginResponse = await fetcher("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
      const { access_token } = loginResponse;
      const { username } = decode(access_token)!;
      await AsyncStorage.setItem("username", username);
      await SecureStore.setItemAsync("token", access_token);
      helpers.resetForm();
      navigation.navigate("Home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return {
    showPassword,
    setShowPassword,
    handleRegister,
  };
};
