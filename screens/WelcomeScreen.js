import { View, Text, StyleSheet, PlatformColor } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>Welcome to iSzuk!</Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: PlatformColor("systemGray5"),
    margin: "auto",
    padding: 24,
    borderRadius: 12,
    overflow: "hidden",
    fontFamily: "Basteleur",
  },
  image: {
    width: 150,
    height: 150,
    marginHorizontal: "auto",
  },
});
