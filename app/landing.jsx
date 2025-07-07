import {View, Text, Image, Pressable} from "react-native";
import { useRouter } from "expo-router";
const Landing =()=>{
    const router = useRouter();
    return (
      <View className="flex-1 bg-white w-full px-8 pt-28">
        <View>
          <Image
            source={require("../assets/obd4.png")}
            className="w-full h-[350px] object-cover mb-8 mt-8"
          />
          <Text className="text-4xl font-extrabold py-3 mt-8">
            Want to Explore the world? We've got you.
          </Text>
          <Text className="text-lg text-gray-400 mb-8 font-semibold mt-2 ">
            Discover amazing travel destinations and experiences with our
            curated plans. Your adventure starts here!
          </Text>

          <View className="mx-auto">
            <View className="flex flex-row border-white bg-gray-300 rounded-2xl justify-between mt-12">
              <Pressable onPress={() => router.push("/Register")}>
                <Text className="text-black bg-white text-center py-5  px-8 rounded-xl text-lg font-bold  ">
                  Register
                </Text>
              </Pressable>
              <Pressable onPress={() => router.push("/Signin")}>
                <Text className="text-black py-5 px-12 rounded-xl text-lg font-bold ">
                  Signin
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
}
export default Landing;