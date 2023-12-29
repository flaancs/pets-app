import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Container, Input } from "../components";
import { useRegisterScreen } from "../hooks/useRegisterScreen";
import { Formik } from "formik";
import { registrationSchema } from "../schemas/register.schema";
import tw from "twrnc";

export default function LoginScreen({ navigation }: any) {
  const { showPassword, setShowPassword, handleRegister } = useRegisterScreen({
    navigation,
  });

  return (
    <Container>
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`mt-20 flex flex-col gap-4`}>
          <FontAwesome5 name="user-circle" size={32} color="blue" />
          <View>
            <Text style={tw`font-bold text-2xl`}>Sign up</Text>
            <Text style={tw`text-gray-500 text-lg`}>
              Create an account to create pets
            </Text>
          </View>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "+569",
              password: "",
            }}
            onSubmit={handleRegister}
            validationSchema={registrationSchema}
          >
            {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
              <View style={tw`flex flex-col gap-4`}>
                <Input
                  label="Name"
                  placeholder="Type your name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  defaultValue={values.name}
                  error={errors.name}
                />
                <Input
                  label="Email"
                  inputMode="email"
                  keyboardType="email-address"
                  placeholder="Type your email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  defaultValue={values.email}
                  error={errors.email}
                />
                <Input
                  label="Phone number"
                  keyboardType="phone-pad"
                  placeholder="Type your phone number"
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  defaultValue={values.phoneNumber}
                  error={errors.phoneNumber}
                />
                <Input
                  label="Password"
                  secureTextEntry={!showPassword}
                  placeholder="Type your password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  defaultValue={values.password}
                  error={errors.password}
                  rightContent={
                    <TouchableOpacity>
                      <View style={tw`flex items-center justify-center h-full`}>
                        {showPassword ? (
                          <FontAwesome5
                            name="eye-slash"
                            size={24}
                            color="black"
                            onPress={() => setShowPassword(false)}
                          />
                        ) : (
                          <FontAwesome5
                            name="eye"
                            size={24}
                            color="black"
                            onPress={() => setShowPassword(true)}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  }
                />

                <TouchableOpacity>
                  <Text
                    style={tw`text-blue-600`}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Already have an account? Log in
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`bg-blue-600 p-4 rounded`}
                  onPress={handleSubmit}
                >
                  <Text style={tw`text-white text-center`}>Create account</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </Container>
  );
}
