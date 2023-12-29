import tw from "twrnc";
import Dropdown from "react-native-input-select";
import { Text } from "react-native";

type DropdownProps = React.ComponentProps<typeof Dropdown>;

export default function Select({ label, error, ...props }: DropdownProps) {
  return (
    <>
      {label && <Text style={tw`text-gray-500 -mb-2`}>{label}</Text>}
      <Dropdown
        dropdownStyle={tw`border border-gray-300 rounded bg-white`}
        {...props}
      />
      {error && <Text style={tw`text-red-500 -mt-8`}>{error}</Text>}
    </>
  );
}
