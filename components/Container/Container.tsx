import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import tw from "twrnc";

export interface ContainerProps {
  children: React.ReactNode;
  withoutKeyboardDismiss?: boolean;
}

export default function Container({
  children,
  withoutKeyboardDismiss,
}: ContainerProps) {
  return withoutKeyboardDismiss ? (
    <View style={tw`flex-1 px-8 py-6 bg-white`}>{children}</View>
  ) : (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={tw`flex-1 px-8 py-6 bg-white`}>{children}</View>
    </TouchableWithoutFeedback>
  );
}
