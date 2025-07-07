import {View, Text, Image} from 'react-native';
const UserCard = (props) => {
    return (
      <View className="bg-gray-200 py-8 px-4">
        <View className="">
          <Image
            source={{ uri: props.image }}
            style={{ width: 55, height: 55 }}
            className="mb-2"
          />
        </View>

        <Text className="text-3xl font-semibold">{`${props.firstName} ${props.lastName}`}</Text>
        <Text className="text-gray-400">@{props.username}</Text>
        <Text className="text-md">
          {props.university ? props.university : "No university specified"}
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