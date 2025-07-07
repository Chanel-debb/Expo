import {View, Text, Image, Pressable, TextInput} from "react-native";
import { useRouter } from "expo-router";
const SignIn = () => {
    const router = useRouter();
    
    return(
        <View className="px-8 pt-28">
            <View className="px-6 pt-28">
                <Text className="text-4xl font-bold text-center mb-2">
                    Sign In
                </Text>
                <Text className="text-lg text-center mb-3">
                    Welcome back. You've been missed so much
                </Text>

                <View className="py-8 px-3">
                    <Text className="text-lg font-semibold">Email</Text>
                    <TextInput
                        placeholder="Enter Email Address"
                        className="border border-gray-300 rounded-lg p-3 mt-2"
                    />
                    <Text className="text-lg font-semibold mt-4">Password</Text>
                    <TextInput
                        placeholder="Enter Password"
                        className="border border-gray-300 rounded-lg p-3 mt-2"
                    />
                </View>

                <Text className="text-blue-900">Forgot Password?</Text>

                <Pressable className="bg-blue-900 rounded-lg p-3 mt-4"
                onPress={() => router.push("/profile")}
                >
                    <Text className="text-white text-center">Sign in</Text>
                </Pressable>

            </View>
        </View>
    )
} 
export default SignIn;
