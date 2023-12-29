import { Container, Input, Select } from "../components";
import { Formik } from "formik";
import { createPetSchema } from "../schemas/pet.schema";
import { useCreatePetScreenProps } from "../hooks/useCreatePetScreen";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { PET_BREEDS, PET_TYPES } from "../utils/constants";

export default function CreatePetScreen({ navigation }: any) {
  const { handleCreatePet } = useCreatePetScreenProps({ navigation });

  return (
    <Container>
      <ScrollView>
        <View style={tw`flex-1 gap-4`}>
          <View>
            <Text style={tw`font-bold text-2xl`}>Create pet</Text>
            <Text style={tw`text-gray-500 text-lg`}>
              Add a new pet to registry
            </Text>
          </View>
          <Formik
            initialValues={{
              name: "",
              type: "",
              breed: "",
              age: "",
              isSterilized: "true",
            }}
            onSubmit={handleCreatePet}
            validationSchema={createPetSchema}
          >
            {({
              setFieldValue,
              handleChange,
              handleBlur,
              values,
              handleSubmit,
              errors,
            }) => (
              <View style={tw`flex flex-col gap-4`}>
                <Input
                  label="Pet name"
                  placeholder="Type pet name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  defaultValue={values.name}
                  error={errors.name}
                />
                <Select
                  label="Pet type"
                  placeholder="Select pet type"
                  options={PET_TYPES.map(({ label, value }) => ({
                    label,
                    value,
                  }))}
                  selectedValue={values.type}
                  onValueChange={(value: string) => {
                    setFieldValue("type", value);
                    setFieldValue("breed", "");
                  }}
                  error={errors.type}
                />
                <Select
                  label="Pet breed"
                  placeholder="Select pet breed"
                  options={
                    PET_BREEDS.filter(
                      (breed) => breed.pet_type === values.type
                    )?.map(({ label, value }) => ({
                      label,
                      value,
                    })) || []
                  }
                  selectedValue={values.breed}
                  onValueChange={(value: string) =>
                    setFieldValue("breed", value)
                  }
                  error={errors.breed}
                />
                <Input
                  label="Pet age (years)"
                  inputMode="numeric"
                  keyboardType="numeric"
                  placeholder="Type pet age"
                  onChangeText={handleChange("age")}
                  onBlur={handleBlur("age")}
                  defaultValue={values.age}
                  error={errors.age}
                />
                <Select
                  label="Is sterilized?"
                  placeholder="Select sterilized status"
                  options={[
                    { label: "Yes", value: "true" },
                    { label: "No", value: "false" },
                  ]}
                  selectedValue={String(values.isSterilized)}
                  onValueChange={(value: string) =>
                    setFieldValue("isSterilized", value === "true")
                  }
                  error={errors.isSterilized}
                />
                <TouchableOpacity
                  style={tw`bg-blue-600 p-4 rounded`}
                  onPress={handleSubmit}
                >
                  <Text style={tw`text-white text-center`}>Create pet</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </Container>
  );
}
