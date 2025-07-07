import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
const onboardingThree = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white w-full px-8 pt-28">
      <View>
        <Image
          source={require("../assets/obd3.png")}
          className="w-full h-[450px] object-cover mt-8"
        />
        <Text className="text-4xl font-extrabold py-3">
          Seamless Booking Experience
        </Text>
        <Text className="text-lg text-gray-400 ">
          Enjoy seamless booking experiences with our {"\n"} user-friendly
          interface and secure payment options.
        </Text>
        <View className="flex flex-row gap-x-2 justify-center py-8">
          <View className="bg-blue-200 py-1 h-2 w-2 rounded-md"></View>
          <View className="bg-blue-200 py-1 h-2 w-2 rounded-md"></View>
          <View className="bg-[#1a16b9] py-1 h-2 w-5 rounded-md"></View>
        </View>
        <Pressable onPress={() => router.push("/landing")}>
          <Text className="text-white bg-[#1a16b9] text-center py-4 rounded-full text-lg ">
            Explore Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
export default onboardingThree;
