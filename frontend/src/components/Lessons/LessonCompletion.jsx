import React from "react";
import { Link, useParams } from "react-router-dom";
import { Stack, Button, Icon, Text } from "@chakra-ui/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import { Header } from "../Header";
import useGateway from "../../hooks/useGateway";

export const LessonCompletion = () => {
  const params = useParams();
  const [data] = useGateway(window.location.pathname, "Post");
  if (!data) return;
  const back_to_topic = `/curriculum/topic/${params["topic_id"]}`;

  const pre_lesson = `/curriculum/topic/${params["topic_id"]}/lesson/${data.pre_lesson}`;
  const next_lesson = `/curriculum/topic/${params["topic_id"]}/lesson/${data.next_lesson}`;
  // PANIC TODO: Lesson completion next lessons are incomplete!`
  if (pre_lesson === null) {
    //TODO: handle no pre lesson
  }

  if (next_lesson === null) {
    //TODO: handle no next lesson
  }
  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      height="100vh"
      background="#FFFFFF"
    >
      <Header
        buttontext="Back to Lessons"
        path={back_to_topic}
        showForum="true"
      />

      <Stack //main body stack with the 2 buttons and lesson complete box
        paddingX="91px"
        paddingY="50px"
        direction="row"
        justify="center"
        spacing="50px"
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
        <Stack
          mt="100px"
          borderRadius="50px"
          direction="row"
          justify="center"
          height={`calc(100vh - 250px)`}
          align="center"
        >
          <Link to={pre_lesson}>
            <Button
              shadow="0 0 10px 5px rgba(0, 0, 0, 0.3)"
              leftIcon={<Icon as={GoChevronLeft} />}
              size="lg"
            >
              Previous Lesson
            </Button>
          </Link>
        </Stack>

        <Stack
          paddingX="90px"
          paddingTop="31px"
          borderRadius="50px"
          height="450px"
          direction="row"
          justify="center"
          align="center"
          spacing="10px"
          overflow="hidden"
          background="#FFFFFF"
          shadow="0 0 10px 5px rgba(0, 0, 0, 0.3)"
        >
          <Stack justify="flex-start" align="center" spacing="17px">
            <Icon as={BsPatchCheck} boxSize={200} />
            <Text
              fontFamily="Arial"
              lineHeight="1.33"
              fontWeight="bold"
              fontSize="24px"
              color="#000000"
              width="250px"
              height="64px"
              maxWidth="100%"
              textAlign="center"
            >
              Lesson Completed!
            </Text>
          </Stack>
        </Stack>

        <Stack
          mt="100px"
          borderRadius="50px"
          direction="row"
          justify="center"
          height={`calc(100vh - 250px)`}
          align="center"
        >
          <Link to={next_lesson}>
            <Button style={{ zIndex: -1 }}> hi</Button>
            <Button
              shadow="0 0 10px 5px rgba(0, 0, 0, 0.3)"
              rightIcon={<Icon as={GoChevronRight} />}
              size="lg"
            >
              Next Lesson
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
