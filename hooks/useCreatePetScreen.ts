import { FormikHelpers } from "formik";
import { fetcher } from "../utils/fetcher";
import { Alert } from "react-native";

export type CreatePetT = {
  name: string;
  type: string;
  breed: string;
  age: string;
  isSterilized: string;
};

export interface useCreatePetScreenProps {
  navigation: any;
}

export const useCreatePetScreenProps = ({
  navigation,
}: useCreatePetScreenProps) => {
  const handleCreatePet = async (
    values: CreatePetT,
    helpers: FormikHelpers<CreatePetT>
  ) => {
    try {
      const data = {
        ...values,
        isSterilized: values.isSterilized === "true",
        age: Number(values.age),
      };

      await fetcher("/pets", {
        method: "POST",
        body: JSON.stringify(data),
      });
      helpers.resetForm();
      navigation.navigate("Pets", { refresh: true });
      Alert.alert("Success", "Pet created successfully");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return {
    handleCreatePet,
  };
};
