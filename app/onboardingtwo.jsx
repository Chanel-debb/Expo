import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

const OnboardingTwo = () => {

    const router = useRouter();
    const handleSkip = () => {
        // console.log("Skip button pressed");
        router.push("/Register");
    }
    return (
      <View className="flex-1 bg-white w-full px-8 pt-28">
        <View>
          <Text
            className="text-blue-700 font-bold text-right"
            onPress={handleSkip}
          >
            Skip
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/obd2.png")}
            className="w-full h-[450px] object-cover mt-8"
          />
          <Text className="text-4xl font-extrabold py-3 mt-8">Travel with Ease</Text>
          <Text className="text-lg text-gray-400 ">
            Explore the world with our curated travel plans and guides. At a
            favourable discounted rate
          </Text>
          <View className="flex flex-row gap-x-2 justify-center py-8">
            <View className="bg-blue-200 py-1 h-2 w-2 rounded-md"></View>
            <View className="bg-[#1a16b9] py-1 h-2 w-5 rounded-md"></View>
            <View className="bg-blue-200 py-1 h-2 w-2 rounded-md"></View>
          </View>
          <Pressable onPress={() => router.push("/onboardingthree")}>
            <Text className="text-white bg-[#1a16b9] text-center py-4 rounded-full text-lg">
              Next
            </Text>
          </Pressable>
        </View>
      </View>
    );
}

export default OnboardingTwo;