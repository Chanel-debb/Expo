import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

// import Obd from "../assets/obd.png";


const App = () => {
    const router = useRouter();
    const handleSkip = () => {
        router.push('/Register');
    }
  return (
    <View className="flex-1 bg-white w-full px-8 pt-28">
      <View>
        <Text className="text-blue-700 font-bold text-right" onPress={handleSkip}>Skip</Text>
      </View>
      <View>
        <Image
          source={require("../assets/obd.png")}
          className="w-full h-[450px] object-cover"
        />
        <Text className="text-4xl font-extrabold py-3">
          Discover the best travel locations and experiences with us
        </Text>
        <Text className="text-lg text-gray-400 ">
          Choose your prefered travel plans from our variety of options
          available{" "}
        </Text>
        <View className="flex flex-row gap-x-2 justify-center py-8">
          <View className="bg-[#1a16b9] py-1 h-2 w-5 rounded-md"></View>
          <View className="bg-blue-200 py-1 h-2 w-2 rounded-md"></View>
          <View className="bg-blue-200 py-1 h-2 w-2 rounded-md"></View>
        </View>
        <Pressable onPress={() => router.push('/onboardingtwo')}>
          <Text className="text-white bg-[#1a16b9] text-center py-4 rounded-full text-lg">
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default App;