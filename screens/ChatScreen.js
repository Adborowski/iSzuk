import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import ChatWriter from "../components/ChatWriter";

const ChatScreen = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("press");
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={120}
        behavior={"height"}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View>
            <Text>Chat history</Text>
          </View>

          <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <ChatWriter />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ChatScreen;
