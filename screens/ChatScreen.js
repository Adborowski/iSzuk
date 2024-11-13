import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import ChatWriter from "../components/ChatWriter";
import { dummyMessages } from "../libs/messages";
import ChatMessage from "../components/ChatMessage";
import { useContext } from "react";
import { ChatContext } from "../store/context/chat-context";

const ChatScreen = () => {
  const { messages, addMessage } = useContext(ChatContext);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
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
          <View style={{ padding: 24 }}>
            <FlatList
              data={messages}
              renderItem={({ item }) => {
                return <ChatMessage {...item} />;
              }}
            />
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
