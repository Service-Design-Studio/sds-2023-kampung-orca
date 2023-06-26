import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "./Divider";
import Footer from "./Footer";
import Messages from "./Messages";

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: "me", text: "i wanna test this cool chatbox out!!!" },
    {
      from: "computer",
      text: "you can send a message here and i'll reply you with the same message :D",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
    <Flex w="100%" h="90vh" justify="center" align="center">
      <Flex w="100%" h="100%" flexDir="column">
        <Divider />
        <Messages messages={messages} />
        <Divider />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
