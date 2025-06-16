import { View, Text, StyleSheet,} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Statistics = () => {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 35,
            marginTop: 66,
          }}
        >
          Statistics
        </Text>
        <Text style={{ fontSize: 26, color: "gray", marginRight: 125 }}>
          Task
        </Text>
        <Ionicons name="options" size={24} color="black" style={styles.icon} />
        <View style={styles.flexContainer}>
          <View style={styles.text}>
            <Text style={styles.border}>60% in progress</Text>
            <Text style={styles.number}>5</Text>
            <Text>Today's task</Text>
          </View>

          <View style={styles.text}>
            <Text style={styles.border}>+1 Yesterday</Text>
            <Text style={styles.number}>2</Text>
            <Text>Overdue task</Text>
          </View>
        </View>

        <View style={styles.activity}>
          <Text style={styles.activityTime}>78% activity</Text>
          <Text style={styles.activityNumber}>2hr25mins</Text>
          <Text style={styles.activityNumberSub}>Per task this week</Text>
        </View>
      </View>
    );
}

export default Statistics;

const styles = StyleSheet.create({
  text: {
    // marginBottom: 2,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 9,
    backgroundColor: "#f0f0f0",
    width: 150,
    textAlign: "center",
    margin: 5,
  },
  container: {
    position: "relative",
    paddingHorizontal: 15,
  },
  activity: {
    marginTop: 5,
    padding: 15,
    paddingLeft: 50,
    paddingRight: 60,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    position: "relative",
    backgroundColor: "black",
    width: "100%",
    borderRadius: 10,
    // backgroundColor: "black",
    // textAlign: "center",
  },
  activityNumber: {
    fontSize: 40,
    marginBottom: 10,
    color: "white",
  },
flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  }
,  border: {
    fontSize: 10,
    // marginBottom: 2,
    padding: 3,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 9,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    marginBottom: 5,
    marginLeft: 25,
  },
  activityTime: {
    fontSize: 13,
    marginBottom: 2,
    position: "absolute",
    right: 5,
    marginTop: 5,
    padding: 4,
    // borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 7,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    marginBottom: 5,
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 10,
    color: "#061970",
    marginTop: 60,
  },
  number: {
    fontSize: 40,
    marginBottom: 5,
   
  },
    activityNumberSub: {
        fontSize: 13,
        color: "white",
        marginTop: 3,
        right: 15,
    },
});