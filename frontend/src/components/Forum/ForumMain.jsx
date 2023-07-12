import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Text, Box } from "@chakra-ui/react";
import ForumChat from "../Chatbox/ForumChat";
import { Header } from "../Header";
import { Card } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export const ForumMain = () => {
  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      height="100vh"
      background="#FFFFFF"
    >
      <Header buttontext="Back to Lessons" path="/lesson-view" />

      <Stack
        paddingX="30px"
        paddingTop="10px"
        direction="row"
        justify="flex-start"
        width="1440px"
        height={`calc(100vh - 120px)`}
        maxWidth="100%"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/NFxpGV6/Untitled-design.png")',
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Stack direction="column" spacing="10px">
          <Card
            padding="20px"
            shadow="md"
            width="800px"
            bg="rgba(255, 255, 255, 0.7)"
          >
            <Stack direction="row" justify="space-between" align="flex-end">
              <Heading size="lg">Welcome to the forums!</Heading>
              <Link to={`/new`} bg="#ed2e38">
                <Button
                  size="lg"
                  bg="#ed2e38"
                  textColor="#FFFFFF"
                  _hover={{ bg: "#7c191c" }}
                  height="48px"
                  fontSize="18px"
                  shadow="md"
                >
                  New Post
                </Button>
              </Link>
            </Stack>
          </Card>
          <Stack height="600px" overflowY="auto">
            <Card
              padding="20px"
              shadow="md"
              width="800px"
              bg="rgba(255, 255, 255, 0.7)"
              transition="background-color 0.3s ease"
              _hover={{ bg: "#ffbabc" }}
            >
              <Link as={Box} to={"/posts/1"}>
                <Stack direction="row" align="flex-end">
                  <Heading size="md" textTransform="uppercase">
                    Sample Post
                  </Heading>
                  <Text fontSize="sm" fontStyle="italic">
                    by{" "}
                    <span style={{ fontSize: "sm", fontWeight: "bold" }}>
                      Nessa
                    </span>
                    . Posted 12h ago.
                  </Text>
                </Stack>
                <Text noOfLines={2} pt="2" fontSize="md">
                  This is a sample post. As it is currently not linked up to any
                  API, the contents of this post, and everything on this page,
                  are hardcoded and unrelated to any of the other pages. To make
                  it longer, here are some random text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sed aliquam magna nec dolor
                  consequat euismod.
                </Text>
              </Link>
            </Card>
            <Card
              padding="20px"
              shadow="md"
              width="800px"
              bg="rgba(255, 255, 255, 0.7)"
              transition="background-color 0.3s ease"
              _hover={{ bg: "#ffbabc" }}
            >
              <Link as={Box} to={"/posts/2"}>
                <Stack direction="row" align="flex-end">
                  <Heading size="md" textTransform="uppercase">
                    Discussion Thread
                  </Heading>
                  <Text fontSize="sm" fontStyle="italic">
                    by{" "}
                    <span style={{ fontSize: "sm", fontWeight: "bold" }}>
                      Nessa
                    </span>
                    . Posted 11h ago.
                  </Text>
                </Stack>
                <Text noOfLines={2} pt="2" fontSize="md">
                  Just trying out different formats for the forum, but mostly
                  just messing around with the code design. This one could be
                  good for multiple comments and discussions and replies, but it
                  is quite messy at the moment. What do you guys think?
                </Text>
              </Link>
            </Card>
          </Stack>
        </Stack>

        <ForumChat />
      </Stack>
    </Stack>
  );
};
