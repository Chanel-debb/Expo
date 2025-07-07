import { View, Text,ActivityIndicator } from "react-native";
import { useState,useEffect } from "react";
// import BlogCard from "../components/blogcard";
const Settings = () => {

  // const { products, setProducts } = BlogCard();
  // const [loading, setLoading] = useState(true);
  // const [refreshing, setRefreshing] = useState(false);
  // const [error, setError] = useState(null);

  //  useEffect(() => {
  //    setProducts();
  //  }, []);
  return (
    <View className="mt-12">
      <Text>Settings</Text>
      <Text>Configure your preferences here.</Text>

      <View>
        {/* <BlogCard /> */}
      </View>
    </View>
  );
};

export default Settings;
