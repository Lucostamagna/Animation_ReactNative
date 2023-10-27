import { StyleSheet, Text, View } from "react-native";
import { Bnt } from "./Components/Bnt";
import Sequence from "./Components/Sequence";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ANIMATIONS</Text>

      {/* <Bnt title={"Press me"} /> */}
      <Sequence>
        <FontAwesome name="bell" size={50} color="gold" />
      </Sequence>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: "2%",
  },
});
