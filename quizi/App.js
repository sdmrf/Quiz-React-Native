import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import Quiz from "./Screens/Quiz";
import Result from "./Screens/Result";

export default function App() {
  return (
    <View style={styles.container}>
      <Result />
      <StatusBar style="auto" />
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
});
