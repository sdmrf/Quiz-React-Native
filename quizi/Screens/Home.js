import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.Home}>
      <View style={styles.Top}>
        <View style={styles.Up}>
        <View style={styles.Title}>
          <Text style={styles.Name}>Quizi</Text>
        </View>
        </View>
        <View style={styles.Down}>
        <View style={styles.Content}>
          <Text style={styles.Heading}>Let's Play!</Text>
          <Text style={styles.Descp}>Choose a category to start playing</Text>
        </View>
        </View>
      </View>
      <View style={styles.Mid}>
        <Text>Mid</Text>
      </View>
      <View style={styles.Bottom}>
        <Text>Bottom</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Home: {
    height: "100%",
    width: "100%",
    backgroundColor: "#6284FF",
    backgroundImage: "linear-gradient(275deg, #6284FF 1%, #556bf4 99%)",
    alignItems: "center",
    justifyContent: "center",
  },

  Top: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Up: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  Title : {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },

  Name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#445069",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 1, height: 1 }, 

  },
  Down : {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Content: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    padding: 10,
    gap: 5,
  },
  Heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  Descp: {
    fontSize: 18,
    fontWeight: 400,
    color: "#fff",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

  },
  Mid: {
    flex: 6,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Bottom: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
