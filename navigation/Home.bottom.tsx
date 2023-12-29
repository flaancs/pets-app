import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "../screens/PetList.screen";
import AccountScreen from "../screens/Account.screen";
import CreatePetScreen from "../screens/CreatePet.screen";

const Tab = createBottomTabNavigator();
export default function HomeBottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pets"
        initialParams={{ refresh: false }}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="list"
              size={24}
              color={focused ? "blue" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePet"
        component={CreatePetScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="plus"
              size={24}
              color={focused ? "blue" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-circle"
              size={24}
              color={focused ? "blue" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
