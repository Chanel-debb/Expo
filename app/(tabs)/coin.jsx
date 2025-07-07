import { View, Text, FlatList, ActivityIndicator } from "react-native";
import CoinCard from "../../components/coincard";
import UserCard from "../../components/usercard";
import { useState, useEffect } from "react";

const Coin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const onRefresh = () => {
    setLoading(true);
    fetchUsers();
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View className="flex flex-col mt-10">
      <Text className="text-2xl font-bold ">Coin</Text>
      <Text className="text-lg">This is the Coin page.</Text>
      <View>
        {/* <CoinCard/> */}
        {/* <UserCard/> */}
      </View>
      <View className="text-md gap-3">
        {/* {users.map((element, index) => (
        <UserCard
            key={index}
            firstName={element.firstName}
            lastName={element.lastName}
            username={element.username}
            university={element.university}
            image={element.image}
        />
        ))} */}
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        users.length > 0 ? (
            <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          loading={loading}
          onRefresh={onRefresh}
          refreshing={loading}
          renderItem={({ item }) => (
            <UserCard
              firstName={item.firstName}
              lastName={item.lastName}
              username={item.username}
              university={item.university}
              image={item.image}
            />
          )}
        />
      ) : (
        <Text className="text-center text-gray-500">No data found</Text>
      )
    )}
    </View>
  );
  //   data={users}
  //         keyExtractor={(item) => item.id.toString()}
  //         renderItems={({item})} =>(
  //            <UserCard
  //             key={index}
  //             firstName={items.firstName}
  //             lastName={items.lastName}
  //             username={items.username}
  //             university={items.university}
  //             image={items.image}
  //         />
  //         )
};
export default Coin;
