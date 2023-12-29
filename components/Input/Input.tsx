import tw from "twrnc";
import { Text, TextInput, TextInputProps, View } from "react-native";

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string | null;
  rightContent?: React.ReactNode;
}

export default function Input({
  label,
  error,
  rightContent,
  ...props
}: InputProps) {
  return (
    <>
      {label && <Text style={tw`text-gray-500 -mb-2`}>{label}</Text>}
      <View>
        <TextInput
          {...props}
          style={tw`border border-gray-300 py-4 px-2 rounded`}
        />
        {rightContent && (
          <View style={tw`absolute right-0 top-0 w-12 h-12`}>{rightContent}</View>
        )}
      </View>
      {error && <Text style={tw`text-red-500 -mt-2`}>{error}</Text>}
    </>
  );
}
