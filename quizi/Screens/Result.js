import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

const Result = () => {
  return (
    <View style={styles.Result}>
      <View style={styles.ResultTop}>
        <ImageBackground
          source={require("../assets/Victory.png")}
          resizeMode="contain"
          alt="Result"
          style={styles.ResultImg}
        />
      </View>
      <View style={styles.ResultMid}>
        <View style={styles.ResultDescpContainer}>
          <Text style={styles.ResultHeading}>Congratulations!</Text>
          <Text style={styles.ResultDescp}>
            You have successfully completed the quiz
          </Text>
        </View>
        <View style={styles.ResultScoreContainer}>
          <Text style={styles.ResultScore}>Score: 10/10</Text>
        </View>
      </View>
      <View style={styles.ResultBottom}>
        <TouchableHighlight>
          <View style={styles.ResultBtn}>
            <Text style={styles.ResultBtnText}>Play Again</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  Result: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#6284FF",
    alignItems: "center",
    justifyContent: "center",
  },
  ResultTop: {
    flex: 3,
    width: "100%",
    height: "100%",
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  ResultImg: {
    flex: 1,
    width: "100%",
    height: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
  ResultMid: {
    flex: 2,
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ResultDescpContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 10,
  },
  ResultHeading: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  ResultDescp: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  ResultScoreContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 10,
    
  },
  ResultScore: {
    fontSize: 50,
    color: "#F6F4EB",
    fontWeight: "bold",
    height: "100%",
    width: "100%",
    textAlign: "center",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },

  ResultBottom: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center",
  },
  ResultBtn: {
    width: 300,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ResultBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6284FF",
  },
});
