import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

//Imports
import { BasketBall } from "../assets/BasketBall.svg";
import { Rocket } from "../assets/Rocket.svg";

const Home = () => {
  return (
    <View style={styles.Home}>
      <View style={styles.HomeTop}>
        <View style={styles.TopUp}>
          <View style={styles.UpTitle}>
            <Text style={styles.UpName}>Quizi</Text>
          </View>
        </View>
        <View style={styles.TopDown}>
          <View style={styles.DownContent}>
            <Text style={styles.ContentHeading}>Let's Play!</Text>
            <Text style={styles.ContentDescp}>
              Choose a category to start playing
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.HomeMid}>
        <View style={styles.MidCards}>
          <View style={styles.CardsTop}>
            {/* Wrap your card views with TouchableOpacity */}
            <TouchableOpacity style={styles.TopCard1}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.TopCard2}>
            </TouchableOpacity>
          </View>
          <View style={styles.CardsBottom}>
            {/* Wrap your card views with TouchableOpacity */}
            <TouchableOpacity style={styles.BottomCard1}>
              <Text>Bottom Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomCard2}>
              <Text>Bottom Card</Text>
            </TouchableOpacity>
          </View>
        </View>
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

  HomeTop: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  TopUp: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  UpTitle: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },

  UpName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#445069",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 1, height: 1 },
  },
  TopDown: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  DownContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    gap: 5,
  },
  ContentHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  ContentDescp: {
    fontSize: 18,
    fontWeight: 400,
    color: "#fff",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  HomeMid: {
    flex: 6,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  MidCards: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  CardsTop: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 25,
  },
  TopCard1: {
    height: 150,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginTop: -25,
  },

  TopCard2: {
    height: 150,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginTop: 25,
  },

  CardsBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  BottomCard1: {
    height: 150,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: 25,
  },
  BottomCard2: {
    height: 150,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: -25,
  },
  Bottom: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
