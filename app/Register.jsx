import { View, Text, Image, Pressable, TextInput } from "react-native";
import { useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();

  return (
    <View className="px-8 pt-28">
      <View className="px-6 pt-28">
        <Text className="text-4xl font-bold text-center mb-2">
          Register Now
        </Text>
        <Text className="text-lg text-center mb-3">
          Welcome to Travel's travel
        </Text>

        <View className="py-8 px-3">
          <Text className="text-lg font-semibold">Email</Text>
          <TextInput
            placeholder="Enter Email Address"
            className="border border-gray-300 rounded-lg p-3 mt-2"
          />
          <Text className="text-lg font-semibold mt-4"> Username</Text>
          <TextInput
            placeholder="Enter Username"
            className="border border-gray-300 rounded-lg p-3 mt-2"
          />
          <Text className="text-lg font-semibold mt-4">Password</Text>
          <TextInput
            placeholder="Enter Password"
            className="border border-gray-300 rounded-lg p-3 mt-2"
          />
          <Text className="text-lg font-semibold mt-4">Confirm Password</Text>
          <TextInput
            placeholder=" Password"
            className="border border-gray-300 rounded-lg p-3 mt-2"
          />
          <View>
            <Text className="px-8 py-3">
              I agree to the Terms and conditions
            </Text>
          </View>
          <Pressable
            className="bg-blue-900 rounded-lg p-3 mt-4"
            onPress={() => router.push("/Signin")}
          >
            <Text className="text-white text-center">Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
export default Register;
