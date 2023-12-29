import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { useState, useEffect } from "react";

export interface useLogoutScreenProps {
  navigation: any;
}

export const useLogoutScreen = ({ navigation }: useLogoutScreenProps) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("username").then((username) => {
      setUsername(username!);
    });
  }, []);

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("token");
    await AsyncStorage.removeItem("username");
    navigation.navigate("Login");
  };

  return {
    username,
    handleLogout,
  };
};
