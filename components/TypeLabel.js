import { Text, View, StyleSheet } from "react-native";

const TypeLabel = ({ type }) => {
  const typeMap = {
    music: { label: "Muzyka", color: "#ff8e6e" },
    sample: { label: "Sample", color: "#ffd26e" },
  };

  return (
    <View style={[styles.container, { backgroundColor: typeMap[type].color }]}>
      <Text style={styles.text}>{typeMap[type].label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 6,
  },
  text: {
    fontSize: 12,
  },
});

export default TypeLabel;
