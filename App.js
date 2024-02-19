import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { globalStyles } from "./styles/global";

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text>Diese Wörter müssen Sie nich sehen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
