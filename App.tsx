import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import tw from "twrnc";
import LoginStackNavigation from "./navigation/Login.stack";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={tw`flex-1`}>
        <View style={tw`flex-1 bg-white`}>
          <LoginStackNavigation />
        </View>
      </SafeAreaView>
    </>
  );
}
