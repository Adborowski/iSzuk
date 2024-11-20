import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ScrollView,
} from "react-native";
import ChatWriter from "../components/ChatWriter";
import { dummyMessages } from "../libs/messages";
import ChatMessage from "../components/ChatMessage";
import { useContext, useRef, useEffect } from "react";
import { ChatContext } from "../store/context/chat-context";

const ChatScreen = () => {
  const { messages, addMessage } = useContext(ChatContext);
  const messageListRef = useRef(null);
  useEffect(() => {
    messageListRef.current.scrollToOffset({ offset: 500 });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      behavior={"padding"}
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
        <View style={{ padding: 24, flex: 1 }}>
          <FlatList
            ref={messageListRef}
            data={messages}
            renderItem={({ item }) => {
              return <ChatMessage {...item} />;
            }}
          />
        </View>

        <View style={{ height: 120 }}>
          <ChatWriter messageListRef={messageListRef} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
