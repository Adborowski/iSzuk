import {
  Text,
  View,
  TextInput,
  StyleSheet,
  PlatformColor,
  Pressable,
  Keyboard,
} from "react-native";
import { customColors } from "../libs/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useState } from "react";
import { ChatContext } from "../store/context/chat-context";

const ChatWriter = () => {
  const { messages, addMessage } = useContext(ChatContext);
  const [inputValues, setInputValues] = useState({
    name: "",
    message: "",
  });

  const handleNameChange = (value) => {
    setInputValues((prev) => {
      return { ...prev, name: value };
    });
  };

  const handleMessageChange = (value) => {
    setInputValues((prev) => {
      return { ...prev, message: value };
    });
  };

  const handleSubmit = () => {
    addMessage(inputValues);
    setInputValues({ name: inputValues.name, message: "" });
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 6, gap: 12, flexDirection: "column" }}>
        <TextInput
          onChangeText={handleNameChange}
          multiline={false}
          style={[styles.textInput, { flex: 1 }]}
          maxLength={100}
          value={inputValues.name}
          placeholder="Imię"
        />
        <TextInput
          onChangeText={handleMessageChange}
          multiline={true}
          style={[styles.textInput, { minHeight: 60 }]}
          maxLength={100}
          value={inputValues.message}
          placeholder="Twoja wiadomość"
        />
      </View>

      <Pressable style={styles.btnSubmit} onPress={handleSubmit}>
        <Text style={{ padding: 12 }}>
          <Ionicons size={32} name={"send"} />
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
    backgroundColor: "white",
    shadowColor: PlatformColor("systemGray4"),
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  label: {
    margin: 0,
    marginBottom: 6,
    fontFamily: "Basteleur-Moonlight",
  },
  textInput: {
    backgroundColor: PlatformColor("systemGray6"),
    padding: 6,
    borderRadius: 6,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  btnSubmit: {
    backgroundColor: customColors.green,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
});

export default ChatWriter;
