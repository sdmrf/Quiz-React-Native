import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";

const Category = "Sports";
const CurrQue = 5;

const Quiz = () => {
  return (
    <View style={styles.Quiz}>
      <View style={styles.QuizTop}>
        <View style={styles.TopCategory}>
          <Text style={styles.TopCategoryText}>{Category}</Text>
        </View>
        <View style={styles.TopProgress}>
          <ProgressBar
            progress={0.5}
            color={MD3Colors.primary100}
            style={styles.ProgressBar}
          />
        </View>
        <View style={styles.TopCurrQue}>
          <Text style={styles.CurrQue}>Question {CurrQue} of 10</Text>
        </View>
      </View>
      <View style={styles.QuizMid}>
        <Text>Quiz</Text>
      </View>
      <View style={styles.QuizBottom}>
        <Text>Quiz</Text>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  Quiz: {
    height: "100%",
    width: "100%",
    backgroundColor: "#6284FF",
    backgroundImage: "linear-gradient(275deg, #6284FF 1%, #556bf4 99%)",
    alignItems: "center",
    justifyContent: "center",
  },
  QuizTop: {
    flex: 2,
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center",
  },
  TopCategory: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba($color: #556bf4, $alpha: 0.75)",
    borderRadius: 15,
    border: "1px solid #FFFFFF",
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  TopCategoryText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#F2F2F2",
  },
  TopProgress: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 15,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ProgressBar: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  TopCurrQue: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  CurrQue: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#F2F2F2",
  },

  QuizMid: {
    flex: 3,
  },
  QuizBottom: {
    flex: 1,
  },
});
