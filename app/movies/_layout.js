import { Stack } from "expo-router";
import { globalStyles } from "../../styles/global";
import { COLORS } from "../../styles/constants";

export default function MoviesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.dark },
        headerTitleStyle: { color: COLORS.grey },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Movies" }} />
      <Stack.Screen name="[id]" options={{ title: "Details" }} />
    </Stack>
  );
}
