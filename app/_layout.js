import { Tabs } from "expo-router";
import { COLORS } from "../styles/constants";
import { AntDesign } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: COLORS.dark },
        headerTitleStyle: { color: COLORS.grey },
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },
        tabBarInactiveBackgroundColor: "#000",
        tabBarInactiveTintColor: COLORS.grey,
        tabBarActiveTintColor: COLORS.accent,
        tabBarIconStyle: { color: "#fff" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => {
            return <AntDesign name="home" size={24} />;
          },
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          title: "Movies",
          tabBarIcon: () => {
            return <AntDesign name="videocamera" size={24} />;
          },
        }}
      />
    </Tabs>
  );
}
