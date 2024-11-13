import { Text, View, StyleSheet, PlatformColor } from "react-native";

const ChatMessage = ({ name, message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PlatformColor("systemGray5"),
    marginBottom: 6,
    padding: 12,
    borderRadius: 6,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    color: PlatformColor("systemGray"),
  },
  message: {},
});

export default ChatMessage;
