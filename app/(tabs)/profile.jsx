import { View, Text,TextInput, Image, ScrollView, FlatList, Pressable, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { useProductStore } from "../../store/productStore";

// import "../../global.css";
// import axios from "axios";

// const response = await axios.get("https://dummyjson.com/products");
// console.log(response.data);
const Profile = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  // const formData={
  //   username: username, 
  //   password: password
  // }
  // const handleSubmit = async() => {
  //   setLoading(true);
  //   try{
  //     const response = await fetch("https://dummyjson.com/auth/login", {
  //       method:"POST",
  //       body: JSON.stringify(formData),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     });
  //     if (!response.ok) {
  //       throw new Error("Login failed try again later");
  //     }
  //     const data = await response.json();
  //     console.log(data)

  //   }catch(error) {
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  
  // const [products, setProducts] = useState([]);
  const { products, setProducts } = useProductStore();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // const onRefesh = () => {
  //   setRefreshing(true);
  //   fetchProducts();
  //   setRefreshing(false);
  // }
  
  useEffect(() => {
    setProducts();
  }, []);

  //   const data = [
  //     {
  //       title: "John Doe",
  //       description: "Software Engineer at XYZ Corp",
  //       date: "Joined: January 2021",
  //       priority: "High",
  //       image1: "https://avatar.iran.liara.run/public/50",
  //       image2: "https://avatar.iran.liara.run/public/30",
  //       image3: "https://avatar.iran.liara.run/public/47",
  //       progress: "76"
  //     },
  //     {
  //       title: "Jane Smith",
  //       description: "Product Manager at ABC Inc",
  //       date: "Joined: March 2020",
  //       priority: "Medium",
  //       image1: "https://avatar.iran.liara.run/public/50",
  //       image2: "https://avatar.iran.liara.run/public/30",
  //       image3: "https://avatar.iran.liara.run/public/47",
  //       progress: "45"
  //     },
  //     {
  //       title: "Alice Johnson",
  //       description: "UX Designer at DEF Ltd",
  //       date: "Joined: June 2019",
  //       priority: "Low",
  //       image1: "https://avatar.iran.liara.run/public/50",
  //       image2: "https://avatar.iran.liara.run/public/30",
  //       image3: "https://avatar.iran.liara.run/public/47",
  //       progress: "90"
  //     },
  //     {
  //       title: "Bob Brown",
  //       description: "Data Scientist at GHI LLC",
  //       date: "Joined: February 2022",
  //       priority: "High",
  //       image1: "https://avatar.iran.liara.run/public/50",
  //       image2: "https://avatar.iran.liara.run/public/30",
  //       image3: "https://avatar.iran.liara.run/public/47",
  //       progress: "60"
  //     },
  //     {
  //       title: "Charlie Green",
  //       description: "DevOps Engineer at JKL Co",
  //       date: "Joined: April 2023",
  //       priority: "Medium",
  //       image1: "https://avatar.iran.liara.run/public/50",
  //       image2: "https://avatar.iran.liara.run/public/30",
  //       image3: "https://avatar.iran.liara.run/public/47",
  //       progress: "80"
  //     }
  //   ]

  //   // const el1 = data[0]
  return (
    <View>
      <View className=" p-4">
        <Text style={{ fontSize: 35, marginTop: 66, marginBottom: 12 }}>
          Profile
        </Text>

      
        
       

        {/* <StatCard
          title="John Doe"
          description="Software Engineer at XYZ Corp"
          date="Joined: January 2021"
          priority="High"
          image1="https://avatar.iran.liara.run/public/50"
          image2="https://avatar.iran.liara.run/public/30"
          image3="https://avatar.iran.liara.run/public/47"
          progress={"76"}
        /> */}

        {/* <UserCard /> */}

        {/* <View className="flex flex-col gap-y-4 mt-4">
          {data.map((element, index) => (
            <StatCard
              key={index}
              title={element.title}
              description={element.description}
              date={element.date}
              priority={element.priority}
              image1={element.image1}
              image2={element.image2}
              image3={element.image3}
              progress={element.progress}
            />
          ))} */}
      </View>
      <View>
        {/* {products.map((element, index) => (
            <View className="" key={index}>
              <Image 
                source={{ uri: element.thumbnail}}
                alt="image"
                className="w-full h-64 rounded-lg mb-2" 
              
              />
              <Text className="text-2xl font-semibold">{element.title}</Text>
              <Text className="font-light text-md ">{element.description}</Text>
              <Text className="font-bold p-1 text-md ">{element.price}</Text>
            </View>
          ))} */}

        {/* 
          
          const name = "Deborah"
          const lower = name.toLowerCase()
          deborah
          toLowercase() */}

        {/* 
            const age = Number(item.age)
            1,
            "1"
          
          */}

        <FlatList
          data={products}
          // refreshing={loading}
          // onRefresh={onRefesh}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="">
              <Image
                source={{ uri: item.thumbnail }}
                alt="image"
                className="w-full h-64 rounded-lg mb-2"
              />
              <Text className="text-2xl font-semibold">{item.title}</Text>
              <Text className="font-light text-md ">{item.description}</Text>
              <Text className="font-bold p-1 text-md ">{item.price}</Text>
            </View>
          )}
        />
      </View>
      {/* <View className="p-4">
          <View>
            <Text>Login </Text>
            <Text>Welcome back</Text>
          </View>
          <View>
            <Text>Username</Text>
            <TextInput
              placeholder="enter username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              className="py-4 px-3 border border-gray-200"
            />
            <Text>Password</Text>
            <TextInput
              placeholder="enter password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              className="py-4 px-3 border border-gray-200"
            />
            <Pressable className="py-2 px-8 border border-blue-100 bg-blue-900 mt-2 rounded-lg" onPress={handleSubmit}>
              {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text className="text-white text-center">Submit</Text>}
            </Pressable>
          </View> 
       </View> */}
    </View>
  );
};

export default Profile;

// "https://avatar.iran.liara.run/public/50"
// "https://avatar.iran.liara.run/public/30"
// "https://avatar.iran.liara.run/public/47"
