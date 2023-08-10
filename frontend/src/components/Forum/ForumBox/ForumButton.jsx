import React from "react";
import NewPost from "./ContentInTheBox";
import { BsChatDots } from "react-icons/bs";
import {
  useDisclosure,
  Button,
  Slide,
  Icon,
  Box,
  CloseButton,
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
        data-cy="forum-button"
      >
        Forum
      </Button>

      <Slide direction="right" in={isOpen}>
        <Box
          paddingY="15px"
          paddingX="20px"
          color="white"
          rounded="md"
          shadow="lg"
          position="fixed"
          right="0px"
          bottom="0px"
          height="85vh"
          width="45vw"
          bg="rgba(255, 255, 255, 0.9)"
          // borderRadius="20px 0 0 0px"
          // border="1px solid black"
        >
          <CloseButton
            data-cy="forum-close-button"
            mb="10px"
            size="lg"
            onClick={onToggle}
            color="black"
          />

          <NewPost />
        </Box>
      </Slide>
    </>
  );
}

export default ForumButton;
