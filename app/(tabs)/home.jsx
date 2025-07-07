import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import "../../global.css"
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
    return (
      <View style={styles.container}>
        <Text style={styles.signinText}>Sign In</Text>
        <Text style={styles.welcomeText}>
          Welcome back. You've been missed so much
        </Text>

        <View style={styles.form}>
          <Text style={styles.emailText}>Email</Text>
          <TextInput
            placeholder="Enter Email Address"
            style={styles.placeholder}
          />
          <Text style={styles.emailText}>Password</Text>
          <TextInput placeholder="Enter Password" style={styles.placeholder} />
        </View>

        <Text className="text-blue-900">Forgot Password?</Text>

        <Pressable onPress={() => alert("Button Pressed!")}>
          <Text style={styles.text}>Sign in</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/")}>
          <Text style={styles.text}>Go home</Text>
        </Pressable>
      </View>
    );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 9,
    backgroundColor: "#061970",
    paddingLeft: 130,
    paddingRight: 130,
    textAlign: "center",
  },
  form: {
    width: "80%",
    marginVertical: 20,
  },
  signinText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#80828a",
    marginBottom: 15,
    textAlign: "center",
  },
  emailText: {
    fontSize: 20,
    marginBottom: 2,
  },
  placeholder: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 13,
    borderRadius: 5,
  },
  forgotPassword: {
    color: "#0b2cbf",
    fontSize: 16,
    marginBottom: 15,
    marginLeft: 190,
  },
});