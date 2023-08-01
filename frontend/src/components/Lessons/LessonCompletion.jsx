import React, { useState } from "react";
import { Link, useParams, useEffect } from "react-router-dom";
import { Stack, Button, Icon, Text } from "@chakra-ui/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import { Header } from "../Header";
import useGateway from "../../hooks/useGateway";
import ForumButton from "../Forum/ForumBox/ForumButton";

export const LessonCompletion = () => {
  const params = useParams();
  const [data] = useGateway(window.location.pathname, "Post");
  if (!data) return;

  let back_to_topic = `/curriculum/topic/${data.topic}`;
  console.log(back_to_topic);
  console.log(params.lesson_id);
  let pre_lesson = `/curriculum/lesson/${data.pre_lesson}`;
  let next_lesson = `/curriculum/lesson/${data.next_lesson}`;

  let exercise = `/curriculum/lesson/${params.lesson_id}/exercise`;

  let show_previous_lesson = true;
  let show_next_lesson = true;
  if (pre_lesson === `/curriculum/lesson/null`) {
    show_previous_lesson = false;
  }
  if (next_lesson === `/curriculum/lesson/null`) {
    show_next_lesson = false;
  }
  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      height="100vh"
      width="100vw"
      background="#FFFFFF"
    >
      <Header buttontext="Back to Lessons" path={back_to_topic} />

      <Stack //main body stack with the 2 buttons and lesson complete box
        paddingX="91px"
        paddingY="50px"
        direction="row"
        justify="center"
        spacing="50px"
        width="100vw"
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
          justify="center"
          align="flex-end"
          width="20vw"
          height={{
            base: "300px",
            lg: "400px",
            xl: "450px",
            "2xl": "500px",
          }}
        >
          {show_previous_lesson && (
            <Link to={pre_lesson}>
              <Button
                bg="#fafafa"
                shadow="lg"
                borderRadius="20px"
                height={{
                  base: "150px",
                  lg: "250px",
                  xl: "300px",
                  "2xl": "350px",
                }}
                size="lg"
                fontSize="24px"
                data-cy="completion-previous-lesson"
              >
                <Stack direction="column">
                  <Icon
                    as={AiOutlineArrowLeft}
                    boxSize={{
                      base: "800px",
                      lg: "150px",
                      xl: "180px",
                      "2xl": "200px",
                    }}
                  />
                  <Text
                    fontSize={{
                      base: "18px",
                      lg: "24px",
                      xl: "26px",
                      "2xl": "26px",
                    }}
                  >
                    Previous Lesson
                  </Text>
                </Stack>
              </Button>
            </Link>
          )}
        </Stack>

        <Stack>
          <Stack
            paddingX="90px"
            paddingTop="31px"
            marginBottom="30px"
            borderRadius="50px"
            height={{
              base: "300px",
              lg: "400px",
              xl: "450px",
              "2xl": "500px",
            }}
            width="40vw"
            direction="row"
            justify="center"
            align="center"
            spacing="10px"
            overflow="hidden"
            background="#fafafa"
            shadow="lg"
          >
            <Stack
              justify="flex-start"
              align="center"
              spacing={{
                base: "18px",
                lg: "30px",
                xl: "50px",
                "2xl": "50px",
              }}
              width="100%"
            >
              <Icon
                as={BsPatchCheck}
                boxSize={{
                  base: "130px",
                  lg: "200px",
                  xl: "230px",
                  "2xl": "250px",
                }}
              />
              <Text
                fontFamily="Arial"
                lineHeight="1.33"
                fontWeight="bold"
                fontSize={{
                  base: "18px",
                  lg: "24px",
                  xl: "26px",
                  "2xl": "26px",
                }}
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
          <Link to={exercise}>
            <Button
              fontSize="24px"
              borderRadius="20px"
              bg="#ed2e38"
              textColor="#FFFFFF"
              _hover={{ bg: "#7c191c" }}
              // onClick={onToggle}
              size="lg"
              height="60px"
              shadow="md"
              // leftIcon={<Icon as={BsChatDots} boxSize="7" />}
            >
              Test your understanding!
            </Button>
          </Link>
        </Stack>

        <Stack
          justify="center"
          height={{
            base: "300px",
            lg: "400px",
            xl: "450px",
            "2xl": "500px",
          }}
          align="flex-start"
          width="20vw"
        >
          {show_next_lesson && (
            <Link to={next_lesson}>
              <Button
                bg="#fafafa"
                shadow="lg"
                size="lg"
                borderRadius="20px"
                data-cy="completion-next-lesson"
                height={{
                  base: "150px",
                  lg: "250px",
                  xl: "300px",
                  "2xl": "350px",
                }}
              >
                <Stack direction="column">
                  <Icon
                    as={AiOutlineArrowRight}
                    boxSize={{
                      base: "800px",
                      lg: "150px",
                      xl: "180px",
                      "2xl": "200px",
                    }}
                  />
                  <Text
                    fontSize={{
                      base: "18px",
                      lg: "24px",
                      xl: "26px",
                      "2xl": "26px",
                    }}
                  >
                    Next Lesson
                  </Text>
                </Stack>
              </Button>
            </Link>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
