import {View, Text, Image} from 'react-native';
const UserCard = () => {
    return (
      <View className="bg-gray-200 py-8 px-4">
        <View className="">
          <Image
            source={{ uri: "https://avatar.iran.liara.run/public/50" }}
            style={{ width: 55, height: 55 }}
            className="mb-2"
          />
        </View>

        <Text className="text-3xl font-semibold">Tobias Whetton</Text>
        <Text className="text-gray-400">@tobias</Text>
        <Text className="text-md">
          Engineer, designer & IT developer that can be found inhabiting coffie
          houses
        </Text>
        <View className="flex flex-row gap-5 relative">
          <Text>221 points</Text>
          <Text>30 friends</Text>
          <Text className="absolute right-2 text-gray-400">
            joined April 2020
          </Text>
        </View>
      </View>
    );
}
export default UserCard;