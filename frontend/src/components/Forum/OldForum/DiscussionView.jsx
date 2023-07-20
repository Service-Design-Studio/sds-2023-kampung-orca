import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Stack,
  Heading,
  Text,
  Box,
  StackDivider,
  Avatar,
} from "@chakra-ui/react";
import ForumChat from "../../Chatbox/ForumChat";
import { Header } from "../../Header";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Comment } from "./Comment.jsx";
import { EnterComment } from "./EnterComment.jsx";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export const DiscussionView = () => {
  const { postId } = useParams();
  const [textContents, setTextContents] = useState("");

  useEffect(() => {
    fetch("/static/media/LoremIpsum.8cb1b43778b8db26179a.txt")
      .then((response) => response.text())
      .then((data) => setTextContents(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      height="100vh"
      background="#FFFFFF"
    >
      <Header
        buttontext="Back to Forum"
        path="/forum"
        showSecondButton="true"
        secondbuttontext="Lesson"
        secondpath="/lesson-view"
      />

      <Stack
        paddingX="30px"
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
        <Stack direction="column">
          <Card
            shadow="md"
            padding="20px"
            height="hug"
            width="750px"
            bg="rgba(255, 255, 255, 0.75)"
          >
            <Stack direction="row" align="center">
              <Avatar
                size="lg"
                src="https://preview.redd.it/duck-with-bread-v0-q8s19kkt0qo81.jpg?auto=webp&s=dfd1909a7ecb33a170554ef18a0bb997d6418235"
              />
              <CardHeader>
                <Heading size="lg">Discussion Thread</Heading>
                <Text fontSize="sm" fontStyle="italic">
                  by{" "}
                  <span style={{ fontSize: "sm", fontWeight: "bold" }}>
                    Nessa
                  </span>
                  . Posted 12h ago.
                </Text>
              </CardHeader>
            </Stack>

            <CardBody>
              <Stack height="hug" spacing="4">
                <Text whiteSpace="pre-line">
                  {
                    "Just trying out different formats for the forum, but mostly just messing around with the code design. This one could be good for multiple comments and discussions and replies, but it's quite messy at the moment. What do you guys think?"
                  }
                </Text>
              </Stack>

              <Accordion
                mt="20px"
                allowToggle
                paddingX="20px"
                paddingY="10px"
                shadow="md"
                width="750px"
                bg="rgba(255, 255, 255, 0.9)"
                transition="background-color 0.3s ease"
                _expanded={{ bg: "rgba(255, 255, 255, 0.7)" }}
                _notExpanded={{
                  bg: "rgba(255, 255, 255, 0.7)",
                  _hover: { bg: "rgba(255, 255, 255, 0.7)" },
                }}
              >
                <AccordionItem>
                  <AccordionButton>
                    {" "}
                    <Box as="span" flex="1" textAlign="left" textStyle="bold">
                      {" "}
                      Comments{" "}
                    </Box>{" "}
                    <AccordionIcon />{" "}
                  </AccordionButton>
                  <AccordionPanel>
                    <Stack mt="10px" divider={<StackDivider />} spacing="4">
                      <Comment
                        time="11h ago"
                        comment="the code for this is so chaotic, can you please clean it up"
                        name="Aloysius"
                        image="https://media.discordapp.net/attachments/1110862017365016598/1115622873076342794/80_junior_college_student_Victoria_Junior_College_singaporean_c_8fc6c429-6625-4adb-bcc6-4db29e5a7d31.png?width=1072&height=1072"
                      />
                      <Comment
                        time="10h ago"
                        comment="I think it is nice!"
                        name="Mohammed"
                        image="https://cdn.discordapp.com/attachments/1110862017365016598/1115625801883340890/80_60_year_old_muslim_retiree_singaporean_malay_HDB_complex_Not_a15416c5-548d-41b4-9f93-4c20a50ddc34.png"
                      />
                      <Comment
                        time="3h ago"
                        comment="does this drop-down comment section even make sense"
                        name="Aloysius"
                        image="https://media.discordapp.net/attachments/1110862017365016598/1115622873076342794/80_junior_college_student_Victoria_Junior_College_singaporean_c_8fc6c429-6625-4adb-bcc6-4db29e5a7d31.png?width=1072&height=1072"
                      />
                      <EnterComment
                        name="Nessa"
                        image="https://preview.redd.it/duck-with-bread-v0-q8s19kkt0qo81.jpg?auto=webp&s=dfd1909a7ecb33a170554ef18a0bb997d6418235"
                      />
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>

          <Card
            shadow="md"
            padding="20px"
            height="hug"
            width="750px"
            bg="rgba(255, 255, 255, 0.75)"
          >
            <Stack direction="row" align="center">
              <Avatar
                ml="20px"
                size="md"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png"
              />
              <CardHeader>
                <Text fontSize="md">
                  {" "}
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    ChatGPT
                  </span>
                  , <span style={{ fontStyle: "italic" }}> 6h ago.</span>{" "}
                </Text>
              </CardHeader>
            </Stack>

            <CardBody>
              <Stack height="hug" spacing="4">
                <Text whiteSpace="pre-line">
                  {
                    "Forums have long been a staple of online communities, providing a platform for people to engage in discussions, share knowledge, and connect with like-minded individuals. These virtual gathering places allow users to create threads on various topics, where they can post comments, ask questions, and provide insights. Forums foster a sense of community, where people from different backgrounds come together to exchange ideas, seek assistance, or simply engage in conversations that pique their interest. Whether focused on hobbies, professional interests, or general discussions, forums serve as valuable sources of information, support, and social interaction. They enable individuals to learn from one another, challenge their perspectives, and build connections with others who share their passions. With their diverse range of topics and a multitude of voices, forums continue to be an integral part of the online landscape, promoting meaningful dialogue and fostering virtual communities."
                  }
                </Text>
              </Stack>

              <Accordion
                mt="20px"
                allowToggle
                paddingX="20px"
                paddingY="10px"
                shadow="md"
                width="750px"
                bg="rgba(255, 255, 255, 0.9)"
                transition="background-color 0.3s ease"
                _expanded={{ bg: "rgba(255, 255, 255, 0.7)" }}
                _notExpanded={{
                  bg: "rgba(255, 255, 255, 0.7)",
                  _hover: { bg: "rgba(255, 255, 255, 0.7)" },
                }}
              >
                <AccordionItem>
                  <AccordionButton>
                    {" "}
                    <Box as="span" flex="1" textAlign="left" textStyle="bold">
                      {" "}
                      Comments{" "}
                    </Box>{" "}
                    <AccordionIcon />{" "}
                  </AccordionButton>
                  <AccordionPanel>
                    <Stack mt="10px" divider={<StackDivider />} spacing="4">
                      <Comment
                        time="3h ago"
                        comment="is this our ai chatbot"
                        name="Aloysius"
                        image="https://media.discordapp.net/attachments/1110862017365016598/1115622873076342794/80_junior_college_student_Victoria_Junior_College_singaporean_c_8fc6c429-6625-4adb-bcc6-4db29e5a7d31.png?width=1072&height=1072"
                      />
                      <EnterComment
                        name="Nessa"
                        image="https://preview.redd.it/duck-with-bread-v0-q8s19kkt0qo81.jpg?auto=webp&s=dfd1909a7ecb33a170554ef18a0bb997d6418235"
                      />
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>

          <Card
            marginBottom="50px"
            shadow="md"
            padding="20px"
            height="hug"
            width="750px"
            bg="rgba(255, 255, 255, 0.75)"
          >
            <Stack direction="row" align="center">
              <Avatar
                ml="20px"
                size="md"
                src="https://cdn.discordapp.com/attachments/1110862017365016598/1115625801883340890/80_60_year_old_muslim_retiree_singaporean_malay_HDB_complex_Not_a15416c5-548d-41b4-9f93-4c20a50ddc34.png"
              />
              <CardHeader>
                <Text fontSize="md">
                  {" "}
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Mohammed
                  </span>
                  , <span style={{ fontStyle: "italic" }}> 1h ago.</span>{" "}
                </Text>
              </CardHeader>
            </Stack>

            <CardBody>
              <Stack height="hug" spacing="4">
                <Text whiteSpace="pre-line">
                  {"Don't know how I end up here. Where is the lesson page..."}
                </Text>
              </Stack>

              <Accordion
                mt="20px"
                allowToggle
                paddingX="20px"
                paddingY="10px"
                shadow="md"
                width="750px"
                bg="rgba(255, 255, 255, 0.9)"
                transition="background-color 0.3s ease"
                _expanded={{ bg: "rgba(255, 255, 255, 0.7)" }}
                _notExpanded={{
                  bg: "rgba(255, 255, 255, 0.7)",
                  _hover: { bg: "rgba(255, 255, 255, 0.7)" },
                }}
              >
                <AccordionItem>
                  <AccordionButton>
                    {" "}
                    <Box as="span" flex="1" textAlign="left" textStyle="bold">
                      {" "}
                      Comments{" "}
                    </Box>{" "}
                    <AccordionIcon />{" "}
                  </AccordionButton>
                  <AccordionPanel>
                    <Stack mt="10px" divider={<StackDivider />} spacing="4">
                      <Comment
                        time="20min ago"
                        comment="jus click the lesson button at the top of the page"
                        name="Aloysius"
                        image="https://media.discordapp.net/attachments/1110862017365016598/1115622873076342794/80_junior_college_student_Victoria_Junior_College_singaporean_c_8fc6c429-6625-4adb-bcc6-4db29e5a7d31.png?width=1072&height=1072"
                      />
                      <EnterComment
                        name="Nessa"
                        image="https://preview.redd.it/duck-with-bread-v0-q8s19kkt0qo81.jpg?auto=webp&s=dfd1909a7ecb33a170554ef18a0bb997d6418235"
                      />
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
        </Stack>

        <ForumChat />
      </Stack>
    </Stack>
  );
};
