import { Text, View, ImageBackground, StyleSheet } from "react-native";
import MotivationalQuote from "@/components/MotivationalQuote";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <SafeAreaProvider style={styles.wrapper}>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        {/* <View style={styles.background}> */}
        <LinearGradient
          colors={["#293e6a", "#293e6a", "#23355b"]}
          style={styles.backgroundGradient}
        >
          <MotivationalQuote />
          {/* </View> */}
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // width: "100%",
    // backgroundImage: "url('https://source.unsplash.com/1600x900/?nature')",
  },
  backgroundGradient: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },

});
