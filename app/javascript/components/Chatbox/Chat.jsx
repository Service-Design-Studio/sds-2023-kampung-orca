import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "./Divider";
import Footer from "./Footer";
import Header from "./Header";
import Messages from "./Messages";

const Chat = () => {
  const [messages, setMessages] = useState([

	{ from: "computer", text: "hi, the chatbox is supposed to be on the right but I can't get it to work and it keeps sticking to the left" },
	{ from: "computer", text: "also i cant get the chatbox to close, you'll have to refresh your page to get rid of it oops"},
	{ from: "computer", text: "and i'm too tired to fix it atm so here's the work in progress"},
	{ from: "me", text: "i wanna test this cool chatbox out!!!" },
	{ from: "computer", text: "you can send a message here and i'll reply you with the same message." },
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
  	<Flex w="100%" h="90%" flexDir="column">
    	<Header />
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