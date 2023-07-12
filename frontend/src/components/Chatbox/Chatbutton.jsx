import React from "react";
import Chat from "./Chat";
import Header from "./ChatHeader";
import { BsChatDots } from "react-icons/bs";
import {
  useDisclosure,
  Button,
  Slide,
  Container,
  Flex,
  Icon,
} from "@chakra-ui/react";

function ChatButton() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Button
        fontSize="18px"
        bg="#ed2e38"
        textColor="#FFFFFF"
        _hover={{ bg: "#7c191c" }}
        onClick={onToggle}
        size="lg"
        height="48px"
        shadow="md"
        leftIcon={<Icon as={BsChatDots} boxSize="7" />}
      >
        Chat with Students!
      </Button>
      <Slide direction="right" in={isOpen} position="right">
        <Container
          position="fixed"
          right="0px"
          bottom="0px"
          p="40px"
          border="1px solid black"
          color="white"
          rounded="md"
          shadow="md"
          height="650px"
          width="500px"
          bg="rgba(255, 255, 255, 0.92)"
          overflow="visible"
          borderRadius="20px 0 0 0px"
          justify="flex-end"
          align="flex-end"
        >
          <Flex flexDirection="column" justify="flex-end" align="flex-end">
            <Header onToggle={onToggle} />
            <Chat my="0" />
          </Flex>
        </Container>
      </Slide>
    </>
  );
}

export default ChatButton;
