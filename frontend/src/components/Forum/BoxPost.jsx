import React from "react";
import Chat from "../Chatbox/Chat";
import { Link } from "react-router-dom";
import Header from "../Chatbox/ChatHeader";
import { BsChatDots, BsFillPlusCircleFill } from "react-icons/bs";
import {
  useDisclosure,
  ScaleFade,
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

function BoxPost({ id, isActive, onClick }) {
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = () => {
    onClick(id);
    onToggle();
  };

  return (
    <>
      <Card
        onClick={handleClick}
        mb="10px"
        padding="20px"
        shadow="0 0 5px 1px rgba(0, 0, 0, 0.3)"
        width="500px"
        bg="#edf2f7"
        transition="background-color 0.3s ease"
        _hover={{ bg: "#ffbabc" }}
      >
        <Stack direction="row">
          <Avatar
            shadow="lg"
            size="lg"
            src="https://preview.redd.it/duck-with-bread-v0-q8s19kkt0qo81.jpg?auto=webp&s=dfd1909a7ecb33a170554ef18a0bb997d6418235"
          />
          <Stack direction="column">
            <Stack direction="row" align="center">
              <Heading size="sm" textTransform="uppercase">
                {" "}
                Sample Post{" "}
              </Heading>
              <Text fontSize="sm" fontStyle="italic">
                by{" "}
                <span style={{ fontSize: "sm", fontWeight: "bold" }}>
                  Nessa
                </span>
                , 12h ago.
              </Text>
            </Stack>

            <Text noOfLines={2} pt="1" fontSize="sm">
              This is a sample post. As it is currently not linked up to any
              API, the contents of this post, and everything on this page, are
              hardcoded and unrelated to any of the other pages. To make it
              longer, here are some random text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed aliquam magna nec dolor consequat
              euismod.
            </Text>
          </Stack>
        </Stack>
      </Card>

      {isActive && (
        <Card
          // Render your additional card component when active
          mb="10px"
          padding="20px"
          shadow="0 0 5px 1px rgba(0, 0, 0, 0.3)"
          width="500px"
          bg="#ffbabc"
        >
          {/* Additional card content */}
        </Card>
      )}
    </>
  );
}

export default BoxPost;
