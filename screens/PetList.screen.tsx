import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Text,
  View,
} from "react-native";
import { usePetListScreen } from "../hooks/usePetListScreen";
import { Container, Input } from "../components";
import { getPetBreed, getPetType } from "../utils/pets";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "twrnc";

export default function HomeScreen({ route }: any) {
  const { refresh } = route.params;

  const {
    loading,
    data,
    totalCount,
    handleDebounceSearch,
    onRefresh,
    isRefreshing,
  } = usePetListScreen({
    refresh,
  });

  return (
    <Container withoutKeyboardDismiss>
      <Text style={tw`font-bold text-2xl`}>Pet registry</Text>
      <Text style={tw`text-gray-500 text-lg mb-2`}>
        {totalCount === 0 ? (
          "No pets"
        ) : (
          <>
            {totalCount} pet{totalCount > 1 ? "s" : ""}
          </>
        )}
      </Text>
      <Input
        placeholder="Search by name..."
        onChangeText={(search) => handleDebounceSearch(search)}
      />
      <View style={tw`flex-1 mt-6`}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : data && data.length > 0 ? (
          <FlatList
            data={data}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <View
                style={tw`flex flex-row justify-between gap-3 border border-gray-200 shadow rounded p-4 mb-4`}
              >
                <View style={tw`flex flex-row gap-3 items-center`}>
                  <View>{getPetType(item.type)?.icon}</View>
                  <View>
                    <Text style={tw`font-semibold`}>{item.name}</Text>
                    <Text>{getPetType(item.type)?.label}</Text>
                  </View>
                </View>
                <View style={tw`flex gap-1`}>
                  {getPetBreed(item.breed) ? (
                    <Text style={tw`text-right`}>
                      {getPetBreed(item.breed)?.label}
                    </Text>
                  ) : (
                    <Text style={tw`text-right text-gray-400`}>
                      Unknown breed
                    </Text>
                  )}
                  <Text style={tw`text-right`}>
                    {item.age} year{item.age > 1 ? "s" : ""}
                  </Text>
                  {item.isSterilized ? (
                    <Text style={tw`text-green-600 font-bold text-right`}>
                      Sterilized
                    </Text>
                  ) : (
                    <Text style={tw`text-red-600 font-bold text-right`}>
                      Not sterilized
                    </Text>
                  )}
                </View>
              </View>
            )}
          />
        ) : (
          <View style={tw`flex-1 items-center gap-2`}>
            <FontAwesome5 name="info-circle" size={32} color="gray" />
            <Text style={tw`text-2xl font-bold text-center`}>
              No pets found
            </Text>
            <Text style={tw`text-center`}>
              It looks like we couldn&apos;t find any pets matching your
              criteria. Please adjust your search or check back later as our pet
              list is regularly updated.
            </Text>
          </View>
        )}
      </View>
    </Container>
  );
}
