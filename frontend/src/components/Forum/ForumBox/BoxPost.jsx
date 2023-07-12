import React, { useState } from "react";
import {
  useDisclosure,
  Card,
  Stack,
  Heading,
  Text,
  Avatar,
  Button,
  Icon,
} from "@chakra-ui/react";
import { DiscussionBox } from "./DiscussionBox";

function BoxPost({ id, isActive }) {
  const { isOpen, onToggle } = useDisclosure();
  const [activePostId, setActivePostId] = useState(null);

  const handleClick = () => {
    setActivePostId(id);
    onToggle();
  };

  const handleBack = () => {
    setActivePostId(null);
    onToggle();
  };

  return (
    <>
      {!isActive && activePostId !== id && (
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
                  Sample Post
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
                Just trying out different formats for the forum, but mostly just
                messing around with the code design. This one could be good for
                multiple comments and discussions and replies, but it looks
                quite messy at the moment. What do you guys think?
              </Text>
            </Stack>
          </Stack>
        </Card>
      )}

      {(isActive || activePostId === id) && (
        <DiscussionBox onBack={handleBack} />
      )}
    </>
  );
}

export default BoxPost;
