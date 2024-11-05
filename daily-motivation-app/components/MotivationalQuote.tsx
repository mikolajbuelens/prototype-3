import { Button, Text, View } from "react-native";

export default function MotivationalQuote() {
  let quote = "Placeholder quote";
  return (
    <View>
      <Text> {quote} - component</Text>
      <Button title="New quote" onPress={() => alert("New quote")} />
    </View>
  );
}
