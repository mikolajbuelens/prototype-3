import {
  Button,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function MotivationalQuote() {
  let backgroundImage = require("../assets/images/mobile-bg.jpeg");

  // let quotes = [
  //   "It takes courage to grow up and become who you really are. — E.E. Cummings",
  //   "Your self-worth is determined by you. You don't have to depend on someone telling you who you are. — Beyoncé",
  //   "Nothing is impossible. The word itself says 'I'm possible!' — Audrey Hepburn",
  //   "Keep your face always toward the sunshine, and shadows will fall behind you. — Walt Whitman",
  //   "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go. — Dr. Seuss",
  //   "Attitude is a little thing that makes a big difference. — Winston Churchill",
  //   "To bring about change, you must not be afraid to take the first step. We will fail when we fail to try. — Rosa Parks",
  //   "All our dreams can come true, if we have the courage to pursue them. — Walt Disney",
  //   "Don't sit down and wait for the opportunities to come. Get up and make them. — Madam C.J. Walker",
  //   "Champions keep playing until they get it right. — Billie Jean King",
  //   "I am lucky that whatever fear I have inside me, my desire to win is always stronger. — Serena Williams",
  //   "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
  //   "It is during our darkest moments that we must focus to see the light. — Aristotle",
  //   "Believe you can and you're halfway there. — Theodore Roosevelt",
  //   "Life shrinks or expands in proportion to one’s courage. — Anaïs Nin",
  //   "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong. — Ella Fitzgerald",
  //   "Try to be a rainbow in someone's cloud. — Maya Angelou",
  //   "If you don't like the road you're walking, start paving another one. — Dolly Parton",
  //   "Real change, enduring change, happens one step at a time. — Ruth Bader Ginsburg",
  //   "All dreams are within reach. All you have to do is keep moving towards them. — Viola Davis",
  //   "It is never too late to be what you might have been. — George Eliot",
  //   "When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected. — Laverne Cox",
  //   "Give light and people will find the way. — Ella Baker",
  //   "It always seems impossible until it's done. — Nelson Mandela",
  //   "Don’t count the days, make the days count. — Muhammad Ali",
  //   "If you risk nothing, then you risk everything. — Geena Davis",
  //   "Definitions belong to the definers, not the defined. — Toni Morrison",
  //   "When you have a dream, you've got to grab it and never let go. — Carol Burnett",
  //   "Never allow a person to tell you no who doesn’t have the power to say yes. — Eleanor Roosevelt",
  //   "When it comes to luck, you make your own. — Bruce Springsteen",
  //   "If you're having fun, that's when the best memories are built. — Simone Biles",
  //   "Failure is the condiment that gives success its flavor. — Truman Capote",
  //   "Hard things will happen to us. We will recover. We will learn from it. We will grow more resilient because of it. — Taylor Swift",
  //   "Your story is what you have, what you will always have. It is something to own. — Michelle Obama",
  //   "To live is the rarest thing in the world. Most people just exist. — Oscar Wilde",
  //   "You define beauty yourself, society doesn’t define your beauty. — Lady Gaga",
  //   "Optimism is a happiness magnet. If you stay positive, good things and good people will be drawn to you. — Mary Lou Retton",
  //   "You just gotta keep going and fighting for everything, and one day you’ll get to where you want. — Naomi Osaka",
  //   "If you prioritize yourself, you are going to save yourself. — Gabrielle Union",
  //   "No matter how far away from yourself you may have strayed, there is always a path back. You already know who you are and how to fulfill your destiny. — Oprah Winfrey",
  //   "A problem is a chance for you to do your best. — Duke Ellington",
  //   "You can’t turn back the clock. But you can wind it up again. — Bonnie Prudden",
  //   "When you can’t find someone to follow, you have to find a way to lead by example. — Roxane Gay",
  //   "There is no better compass than compassion. — Amanda Gorman",
  //   "Stand before the people you fear and speak your mind – even if your voice shakes. — Maggie Kuhn",
  //   "It’s a toxic desire to try to be perfect. I realized later in life that the challenge is not to be perfect. It’s to be whole. — Jane Fonda",
  //   "Vitality shows not only in the ability to persist but in the ability to start over. — F. Scott Fitzgerald",
  //   "The most common way people give up their power is by thinking they don’t have any. — Alice Walker",
  //   "Love yourself first and everything else falls into line. — Lucille Ball",
  //   "In three words I can sum up everything I've learned about life: It goes on. — Robert Frost",
  // ];

  // Note: styling uses camel casing
  //   Todo: Seperate authors from quotes in order to app

  // let quotes: { text: string }[] = [];
  const [quotes, setQuotes] = useState<{ quote: string; author: string }[]>([]);
  const [randomQuote, setRandomQuote] = useState({ text: "", author: "" });

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
        console.error("Error fetching quotes:", error);
      });
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      getRandomQuote();
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
    backgroundColor: "grey",
    marginTop: 20,
    // width: 200,
    // width: "40%",
    padding: 10,
    alignItems: "center",
    // flex: 1,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },

  quoteContainer: {
    flex: 1,
    width: "90%",
    maxWidth: 400,
    height: "70%",
    minHeight: 200,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
});
