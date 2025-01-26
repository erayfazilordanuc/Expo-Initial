import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import "../global.css"
export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-3xl">App</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue", borderColor: "black" }}>
        Go to Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
