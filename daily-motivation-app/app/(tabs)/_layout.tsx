import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return (
    // Todo: find a way to hide the top header, doesn't seem to work with the options prop?

    <Tabs>
      <Tabs.Screen name="test" options={{ headerShown: false }} />
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="settings" />

      <Stack.Screen name="hideHeader" options={{ headerShown: false }} />
    </Tabs>
  );
}
