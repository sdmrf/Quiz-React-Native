import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { ProgressBar, MD3Colors } from "react-native-paper";

const Category = "Sports";
const CurrQue = 5;
const Question =
  "What caused Jake Lloyd who played Anakin Skywalker in The Phantom Menace to quit acting?";
const Options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

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
        <View style={styles.QuizMidQue}>
          <Text style={styles.Question}>{Question}</Text>
          <View style={styles.Options}>
            {Options.map((option, index) => (
              <TouchableHighlight
                key={index}
                style={[
                  styles.Option,
                  {
                    backgroundColor:
                      selectedOption === option ? "#03C988" : "#FFFFFF",
                  },
                ]}
                underlayColor="rgba(85, 110, 255, 0.8)"
                onPress={() => handleOptionPress(option)}
              >
                <Text
                  style={[
                    styles.OptionText,
                    {
                      color: selectedOption === option ? "#FFFFFF" : "#556bf4",
                    },
                  ]}
                >
                  {option}
                </Text>
              </TouchableHighlight>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.QuizBottom}>
        <View style={styles.BottomUp}>
          <TouchableHighlight
            style={[
              styles.BottomUpButton,
              {
                backgroundColor:
                  selectedOption === null ? "#FF6301" : "#03C988",
              },
            ]}
          >
            <Text style={styles.BottomUpButtonText}>
              {selectedOption ? "Next" : "Skip"}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.BottomDown}>
          <TouchableHighlight style={styles.BottomDownButton}>
            <Text style={styles.BottomDownButtonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  Quiz: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#6284FF",
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
    backgroundColor: "rgba(85, 110, 255, 0.25)",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 1,
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
    width: 300,
    height: 20,
    borderRadius: 10,
  },
  TopCurrQue: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  CurrQue: {
    fontSize: 25,
    fontWeight: "500",
    color: "#F2F2F2",
  },

  QuizMid: {
    flex: 4,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  QuizMidQue: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  Question: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F2F2F2",
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  Options: {
    flex: 4,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 10,
    flexDirection: "column",
    gap: 10,
  },
  Option: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  OptionText: {
    fontSize: 25,
    fontWeight: "700",
    color: "rgba(85, 110, 255, 1)",
  },
  QuizBottom: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  BottomUp: {
    flex: 1,
    height: "50%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  BottomUpButton: {
    flex: 1,
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6301",
    borderTopRightRadius: 25,
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 4, height: -4 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  BottomUpButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F2F2F2",
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  BottomDown: {
    flex: 1,
    height: "50%",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  BottomDownButton: {
    flex: 1,
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6301",
    borderTopLeftRadius: 25,
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: -4, height: -4 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  BottomDownButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F2F2F2",
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});
