import { View, Text, Image } from "react-native";

const StatCard = (props) => {
    return (
      <View className="border border-gray-300 rounded-xl py-2 px-2">
        <Text className="text-xl font-semibold">{props.title} </Text>
        <Text className="">{props.description}</Text>
        <View>
          <Text>deadline</Text>
          <Text>{props.date}</Text>
          <Text>{props.priority}</Text>
        </View>
        <View className="flex flex-row">
          <Image
            source={{ uri: props.image1 }}
            style={{ width: 35, height: 35 }}
          />
          <Image
            source={{ uri: props.image2 }}
            style={{ width: 35, height: 35 }}
          />
          <Image
            source={{ uri: props.image3 }}
            style={{ width: 35, height: 35 }}
          />
        </View>
        <View className="flex gap-x-6 flex-row mt-4 items-center">
          <Text>In Progress</Text>
          <View className="flex-1 h-2 bg-gray-200 rounded-md relative">
            <View
              className="bg-blue-500 h-2 inline-block rounded-md absolute top-0 left-0"
              style={{ width: `${props.progress}%` }}
            ></View>
          </View>
          <Text>{props.progress}</Text>
        </View>
      </View>
    );
}

export default StatCard;