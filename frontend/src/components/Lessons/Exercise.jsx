import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import useGateway from "../../hooks/useGateway";
import {
  Stack,
  Box,
  Text,
 } from "@chakra-ui/react";
import { Header } from "../Header";

export const Exercise = () => {
  const params = useParams();
  const [data] = useGateway(window.location.pathname, "Get");
  if (!data) return null;

  const back_to_lesson_complete = `/curriculum/lesson/${params["lesson_id"]}/lesson_completed`;
  const lesson_id = data?.lesson_id;

  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      height="100vh"
      width="100vw"
      background="#FFFFFF"
    >
      <Header
        buttontext="Back to Lesson Completion"
        path={back_to_lesson_complete}
      />

      <Stack>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
      >
        {data.map((item) => {
            const lesson_id = item["lesson_id"];
            const exercise_id = item["exercise_id"];
            console.log(exercise_id); // gives the correct exercise_id within lesson 0001
            <Text fontSize="xl">
            </Text>
          })
        }
      </Box>
      </Stack>


    </Stack>
  );
};

export default Exercise;


