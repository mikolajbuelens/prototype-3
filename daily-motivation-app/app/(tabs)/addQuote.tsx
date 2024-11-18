import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

export default function AddQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  type Quote = { quote: string; author: string } | null;
  const [submittedQuote, setSubmittedQuote] = useState<Quote>(null);

  function submitQuote() {
    //  post request to API

    if (quote && author) {
      fetch("http://127.0.0.1:8000/api/motivation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quote, author }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSubmittedQuote(data);
        })
        .catch((error) => {
          console.error("Error submitting quote:", error);
        });
    }
  }

  return (
    // <View style={styles.container}>
   <LinearGradient
          colors={["#293e6a", "#293e6a", "#23355b"]}
          style={styles.backgroundGradient}
        >


      {/* Form for adding a quote */}
      <TextInput
        style={styles.input}
        placeholder="Enter your quote here"
        value={quote}
        onChangeText={setQuote}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter author's name"
        value={author}
        onChangeText={setAuthor}
      />
      <Button title="Add Quote" onPress={submitQuote} />

      {submittedQuote && (
        <View style={styles.submittedQuoteContainer}>
          <Text style={styles.submittedQuote}>
            "{submittedQuote.quote}" - {submittedQuote.author}
          </Text>
        </View>
      )}
      </LinearGradient>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 16,
  },
  submittedQuoteContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  submittedQuote: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
  },

  backgroundGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    display: "flex",
    width: "100%",
  },
});
