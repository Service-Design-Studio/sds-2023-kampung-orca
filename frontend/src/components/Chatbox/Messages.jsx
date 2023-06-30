import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

const Messages = ({ messages }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <Flex
      w="100%"
      h="60%"
      overflowY="scroll"
      flexDirection="column"
      p="3"
      sx={{
        "&::-webkit-scrollbar": {
          width: "16px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.1)`,
        },
        "&::-webkit-scrollbar-thumb": {
          width: "16px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 100, 0, 0.8)`,
        },
      }}
    >
      {messages.map((item, index) => {
        if (item.from === "me") {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="green"
                color="white"
                borderRadius="20px"
                minW="30px"
                maxW="350px"
                my="1"
                p="3"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%">
              <Avatar
                name="Computer"
                src="https://preview.redd.it/duck-with-bread-v0-q8s19kkt0qo81.jpg?auto=webp&s=dfd1909a7ecb33a170554ef18a0bb997d6418235"
                bg="blue.300"
              ></Avatar>
              <Flex
                bg="gray.100"
                borderRadius="20px"
                color="black"
                minW="30px"
                maxW="350px"
                my="1"
                p="3"
                overflowWrap="break-word"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
