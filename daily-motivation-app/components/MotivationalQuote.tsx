import {
  Button,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function MotivationalQuote() {
  let backgroundImage = require("../assets/images/mobile-bg.jpeg");

  let localQuotes = [
    {
    quote: "It takes courage to grow up and become who you really are.",
    author: "E.E. Cummings"
    },
    {
    quote: "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
    author: "Beyoncé"
    },
    {
    quote: "Nothing is impossible. The word itself says 'I'm possible!'",
    author: "Audrey Hepburn"
    }
  ];

  // Note: styling uses camel casing
  //   DONE: Seperate authors from quotes in order to app

  // let quotes: { text: string }[] = [];
  const [quotes, setQuotes] = useState<{ quote: string; author: string }[]>([]);
  const [randomQuote, setRandomQuote] = useState({ text: "", author: "" });
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity value of 0 (hidden)

  function getRandomQuote() {
    if (quotes.length > 0) {
      let randomIndex = Math.floor(Math.random() * quotes.length);
      let randomQuote = quotes[randomIndex];

      setRandomQuote({
        text: randomQuote.quote,
        author: "- " + randomQuote.author,
      });
    }
  }

  const [quote, setQuote] = useState("");
  console.log("test");

  // fetch quotes from API

  function fetchQuote() {
    fetch("http://127.0.0.1:8000/api/motivation")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log(data[0].text);
        setQuotes(data);
      })
      .catch((error) => {
setQuotes(localQuotes);

        console.error("Error fetching quotes:", error);
      
      });
  }

  function getLocalQuotes() {
    console.log("Error fetching quotes, getting local quotes");
    setQuotes([
      {
        quote: "It takes courage to grow up and become who you really are.",
        author: "E.E. Cummings",
      },
      {
        quote:
          "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
        author: "Beyoncé",
      },
      {
        quote: "Nothing is impossible. The word itself says 'I'm possible!'",
        author: "Audrey Hepburn",
      },
    ]);
  }

  // const fadeAnim = new Animated.Value(0);
  // doesn't seem to work
  const fadeInOutAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      getRandomQuote();
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // useEffect(() => {
  //   if (randomQuote.text) {
  //   }
  // }, [randomQuote]);

  useEffect(() => {
    if (quotes.length > 0) {
      getRandomQuote();
      fadeInOutAnimation();
    }
  }, [quotes]);

  return (
    // <SafeAreaProvider style={styles.wrapper}>
    <>
      <View style={styles.quoteContainer}>
        <Text style={styles.text}> {randomQuote.text}</Text>
        <Text style={[styles.text, styles.author]}> {randomQuote.author}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          getRandomQuote();
        }}
      >
        <Text>Get new quote</Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
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
    width: "100%",

    // backgroundImage: "url('https://source.unsplash.com/1600x900/?nature')",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    // color: "gray",
    // fontSize: 38,
    // width: "80%",
    // height: "50%",
    // backgroundColor: "white",
    // textAlign: "center",
    // borderRadius: 8,
    fontFamily: "Forum",
    color: "gray",
    fontSize: 38,
    textAlign: "center",

    // padding: 20,
  },

  author: {
    fontStyle: "italic",
    textAlign: "left",
    color: "black",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#2196F3",
    marginTop: 20,
    // width: 200,
    // width: "40%",
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
    color: "white",
    // flex: 1,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },

  quoteContainer: {
    flex: 1,
    width: "90%",
    maxWidth: 400,
    maxHeight: "70%",
    // height: "20%",
    // minHeight: 100,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    // marginBottom: 20,
  },
});
