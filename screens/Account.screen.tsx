import { Text, TouchableOpacity, View } from "react-native";
import { Container } from "../components";
import { FontAwesome5 } from "@expo/vector-icons";
import { useLogoutScreen } from "../hooks/useLogoutScreen";
import tw from "twrnc";

export default function AccountScreen({ navigation }: any) {
  const { username, handleLogout } = useLogoutScreen({ navigation });
  return (
    <Container>
      <View
        style={tw`flex items-center gap-4 border border-gray-200 shadow rounded p-4`}
      >
        <FontAwesome5 name="user-circle" size={60} color="blue" />
        <Text style={tw`text-xl font-semibold`}>{username}</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={tw`text-lg text-red-500`}>Logout</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
