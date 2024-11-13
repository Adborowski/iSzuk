import { createContext, useState, useEffect } from "react";
import { dummyMessages } from "../../libs/messages";

export const ChatContext = createContext({
  messages: [],
  addMessage: (id) => {},
});

const ChatContextProvider = ({ children }) => {
  useEffect(() => {
    console.log("Messages:", messages);
  }, [messages]);
  const [messages, setMessages] = useState(dummyMessages);
  const addMessage = ({ name, message }) => {
    setMessages((prev) => {
      return [...prev, { name: name, message: message }];
    });
  };

  const value = {
    messages: messages,
    addMessage: addMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatContextProvider;
