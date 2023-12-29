import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Container, Input } from "../components";
import { useLoginScreen } from "../hooks/useLoginScreen";
import { Formik } from "formik";
import { loginSchema } from "../schemas/login.schema";
import tw from "twrnc";

export default function LoginScreen({ navigation }: any) {
  const { showPassword, setShowPassword, handleLogin } = useLoginScreen({
    navigation,
  });

  return (
    <Container>
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`mt-40 flex flex-col gap-4`}>
          <FontAwesome5 name="user-circle" size={32} color="blue" />
          <View>
            <Text style={tw`font-bold text-2xl`}>Login</Text>
            <Text style={tw`text-gray-500 text-lg`}>
              Login into your account to view and create pets
            </Text>
          </View>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleLogin}
            validationSchema={loginSchema}
          >
            {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
              <View style={tw`flex flex-col gap-4`}>
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

                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={tw`text-blue-600`}>
                    Don&apos;t have an account? Sign up
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`bg-blue-600 p-4 rounded`}
                  onPress={handleSubmit}
                >
                  <Text style={tw`text-white text-center`}>Log in</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </Container>
  );
}
