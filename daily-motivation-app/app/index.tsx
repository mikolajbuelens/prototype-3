import { Text, View } from "react-native";
import MotivationalQuote from "@/components/MotivationalQuote";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/* <Text>Motivational quote placeholder</Text> */}
      <MotivationalQuote />
    </View>
  );
}
