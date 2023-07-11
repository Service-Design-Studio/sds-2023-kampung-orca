import React from "react";
import Chat from "../Chatbox/Chat";
import { Link } from "react-router-dom";
import ForumBoxPost from "./BoxPost";
import NewPost from "./NewPostButton";
import { BsChatDots, BsFillPlusCircleFill } from "react-icons/bs";
import {
  useDisclosure,
  Button,
  Slide,
  Container,
  Flex,
  Icon,
  Box,
  CloseButton,
  Text,
  Card,
  Stack,
  Heading,
  Avatar,
} from "@chakra-ui/react";

function ForumButton() {
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
        Forum
      </Button>

      <Slide direction="right" in={isOpen}>
        <Box
          paddingY="15px"
          paddingX="20px"
          color="white"
          rounded="md"
          shadow="0 0 10px 5px rgba(0, 0, 0, 0.3)"
          position="fixed"
          right="0px"
          bottom="0px"
          height="660px"
          width="600px"
          bg="rgba(255, 255, 255, 0.9)"
          // borderRadius="20px 0 0 0px"
          // border="1px solid black"
        >
          <CloseButton mb="10px" size="lg" onClick={onToggle} color="black" />

          <NewPost />
        </Box>
      </Slide>
    </>
  );
}

export default ForumButton;
