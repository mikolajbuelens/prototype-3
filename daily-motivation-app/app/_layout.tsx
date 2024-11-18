import { Stack, Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function TabLayout() {
  const [loaded] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Forum: require("../assets/fonts/ForumRegular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    // Todo: find a way to hide the top header, doesn't seem to work with the options prop?
    // Todo: change color of tab bar (transparant)

    <Tabs>
      <Tabs.Screen name="test" options={{ headerShown: false }} />
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="settings" />
      <Stack.Screen name="hideHeader" options={{ headerShown: false }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
});
