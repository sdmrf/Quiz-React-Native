import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.Home}>
      <View style={styles.HomeTop}>
        <View style={styles.TopUp}>
          <View style={styles.UpTitle}>
            ?<Text style={styles.UpName}>Quizi</Text>
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
            {/* Top Card 1 */}
            <View style={styles.TopCard}>
              <Pressable style={styles.TopCard1}>
                <Image
                  source={require("../assets/BasketBall.png")}
                  alt="BasketBall"
                  style={styles.TopCard1img}
                />
              </Pressable>
              <Text style={styles.TopCardTitle}>Sports</Text>
              {/* Title for Top Card 1 */}
            </View>

            {/* Top Card 2 */}
            <View style={styles.TopCard}>
              <Pressable style={styles.TopCard2}>
                <Image
                  source={require("../assets/Rocket.png")}
                  alt="Rocket"
                  style={styles.TopCard2img}
                />
              </Pressable>
              <Text style={styles.TopCardTitle}>Science</Text>
              {/* Title for Top Card 2 */}
            </View>
          </View>
          <View style={styles.CardsBottom}>
            {/* Bottom Card 1 */}
            <View style={styles.BottomCard}>
              <Pressable style={styles.BottomCard1}>
                <Image
                  source={require("../assets/Business.png")}
                  alt="Business"
                  style={styles.BottomCard1img}
                />
              </Pressable>
              <Text style={styles.BottomCardTitle}>Business</Text>
              {/* Title for Bottom Card 1 */}
            </View>

            {/* Bottom Card 2 */}
            <View style={styles.BottomCard}>
              <Pressable style={styles.BottomCard2}>
                <Image
                  source={require("../assets/Earth.png")}
                  alt="Earth"
                  style={styles.BottomCard2img}
                />
              </Pressable>
              <Text style={styles.BottomCardTitle}>Environment</Text>
              {/* Title for Bottom Card 2 */}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Bottom}>
        <Pressable style={styles.BottomMenu}>
          <Image
            source={require("../assets/list.png")}
            alt="List"
            style={styles.BottomMenuList}
          />
        </Pressable>
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
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Use boxShadow here
  },

  UpName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#445069",
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
  },
  ContentDescp: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#fff",
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
    gap: 25,
  },
  CardsTop: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 25,
  },

  TopCard: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  TopCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f2f2f2",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  TopCard1: {
    height: 150,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginTop: -25,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  TopCard1img: {
    height: 125,
    width: 125,
    position: "absolute",
    top: -25,
    left: -25,
  },

  TopCard2: {
    height: 150,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Use boxShadow here
    marginTop: 25,
    alignItems: "flex-start", // Align content to the start of the container (left)
    justifyContent: "flex-start", // Align content to the start of the container (top)
    position: "relative",
  },

  TopCard2img: {
    height: 150,
    width: 150,
    position: "absolute",
    top: -25,
    right: -25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  CardsBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  BottomCard: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  BottomCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f2f2f2",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  BottomCard1: {
    height: 150,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Use boxShadow here
    marginTop: -25,
    alignItems: "flex-start", // Align content to the start of the container (left)
    justifyContent: "flex-start", // Align content to the start of the container (top)
    position: "relative",
  },

  BottomCard1img: {
    height: 150,
    width: 150,
    position: "absolute",
    top: -25,
    left: -25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  BottomCard2: {
    height: 150,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Use boxShadow here
    marginTop: 25,
    alignItems: "flex-start", // Align content to the start of the container (left)
    justifyContent: "flex-start", // Align content to the start of the container (top)
    position: "relative",
  },
  BottomCard2img: {
    height: 150,
    width: 150,
    position: "absolute",
    top: -25,
    right: -25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  Bottom: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  BottomMenu: {
    width: "20%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6301",
    borderTopRightRadius: 25,
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: -4, height: -4 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  BottomMenuList: {
    height: 25,
    width: 25,

    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
