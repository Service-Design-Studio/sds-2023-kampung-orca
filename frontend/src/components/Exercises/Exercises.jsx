import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import SubmitAlert from "./SubmitAlert";
import ExerciseSection from "./ExerciseSection";
import SendAnswer from "./SendAnswer";
import {
  Stack,
  Button,
  Icon,
  Text,
  Box,
  Textarea,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { Header } from "../Header";
import useGateway from "../../hooks/useGateway";

export const Exercises = () => {
  const params = useParams();
  const url = window.location.pathname.replace("exercise", "show_exercise");

  const {
    isOpen: showSubmitAlert,
    onOpen: openSubmitAlert,
    onClose: closeSubmitAlert,
  } = useDisclosure();

  const back_to_complete = `/curriculum/lesson/${params.lesson_id}/lesson_completed`;

  useEffect(() => {
    setIsSubmitted(false);
  }, []);

  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitClick = () => {
    openSubmitAlert();
  };

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const isTextareaEmpty = value.trim().length === 0;
  const [data] = useGateway(url, "Get");
  if (!data) return;
  else {
    const qns = data.qns;
    const title = data.title;
    const lesson_id = data.lesson_id;

    const handleSubmit = () => {
      setIsSubmitted(true);
      closeSubmitAlert();
      SendAnswer(lesson_id, value);
    };

    return (
      <Stack
        justify="flex-start"
        align="flex-start"
        height="100vh"
        width="100vw"
        background="#FFFFFF"
      >
        <Header showBack showLogout buttontext="Back to Lessons" path={back_to_complete} />

        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="0px"
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
            paddingLeft={{
              base: "40px",
              lg: "50px",
              xl: "60px",
              "2xl": "70px",
            }}
            paddingRight={{
              base: "10px",
              lg: "20px",
              xl: "25px",
              "2xl": "40px",
            }}
            paddingTop={{
              base: "40px",
              lg: "50px",
              xl: "60px",
              "2xl": "70px",
            }}
            paddingBottom={{
              base: "10px",
              lg: "10px",
              xl: "15px",
              "2xl": "20px",
            }}
            spacing={{
              base: "20px",
              lg: "20px",
              xl: "30px",
              "2xl": "30px",
            }}
            justify="flex-start"
            align="center"
            overflow="hidden"
            width="46vw"
            height={`calc(97vh - 120px)`}
            background="#FFFFFF"
            shadow="0 0 10px 5px rgba(0, 0, 0, 0.1)"
            marginX="2vw"
            marginY="2vh"
            borderRadius="20px"
          >
            <Stack
              justify="flex-start"
              align="flex-start"
              paddingRight={{
                base: "10px",
                lg: "20px",
                xl: "35px",
                "2xl": "30px",
              }}
              spacing="20px"
              width="100%"
              height="100vh"
              overflowY="auto"
              color="#000000"
              style={{ zIndex: 10 }}
              sx={{
                "&::-webkit-scrollbar": {
                  width: "16px",
                  borderRadius: "8px",
                  backgroundColor: `rgba(0, 0, 0, 0.1)`,
                },
                "&::-webkit-scrollbar-thumb": {
                  width: "16px",
                  borderRadius: "8px",
                  backgroundColor: `rgba(237, 46, 56, 1)`,
                },
              }}
            >
              <ExerciseSection
                headerSize={{
                  base: "22px",
                  lg: "23px",
                  xl: "24px",
                  "2xl": "25px",
                }}
                contentSize={{
                  base: "16px",
                  lg: "17px",
                  xl: "18px",
                  "2xl": "19px",
                }}
                key={"0"}
                title={title}
                content={qns}
              />
            </Stack>
          </Stack>

          <Stack
            spacing={{
              base: "20px",
              lg: "20px",
              xl: "30px",
              "2xl": "30px",
            }}
            justify="flex-start"
            align="center"
            width="46vw"
            height={`calc(97vh - 120px)`}
            marginX="2vw"
            marginY="2vh"
            direction="column"
          >
            <Stack
              paddingX={{
                base: "30px",
                lg: "40px",
                xl: "40px",
                "2xl": "50px",
              }}
              paddingTop={{
                base: "30px",
                lg: "40px",
                xl: "40px",
                "2xl": "50px",
              }}
              paddingBottom={{
                base: "10px",
                lg: "10px",
                xl: "20px",
                "2xl": "30px",
              }}
              justify="flex-start"
              align="flex-start"
              overflow="hidden"
              width="100%"
              height="45vh"
              background="#FFFFFF"
              shadow="0 0 10px 5px rgba(0, 0, 0, 0.1)"
              borderRadius="20px"
            >
              {isSubmitted ? (
                <>
                  <Heading fontSize="20px" mb="10px">
                    {" "}
                    Your answer:
                  </Heading>
                  <Text>{value}</Text>
                </>
              ) : (
                <>
                  <Heading fontSize="20px" mb="10px">
                    {" "}
                    Write your answer:
                  </Heading>
                  <Textarea
                    width="100%"
                    height="100%"
                    value={value}
                    onChange={handleInputChange}
                    placeholder="Write your thoughts here!"
                  />
                  <Stack width="100%" justify="flex-start" align="flex-end">
                    <Button
                      fontSize="18px"
                      bg="#ed2e38"
                      textColor="#FFFFFF"
                      _hover={{ bg: "#7c191c" }}
                      size="lg"
                      height="48px"
                      shadow="md"
                      onClick={handleSubmitClick}
                      isDisabled={isTextareaEmpty}
                    >
                      <SubmitAlert
                        isOpen={showSubmitAlert}
                        onClose={() => closeSubmitAlert()}
                        onSubmit={handleSubmit}
                      />
                      <Text>Submit</Text>
                    </Button>{" "}
                  </Stack>
                </>
              )}
            </Stack>
            <Stack
              padding={{
                base: "30px",
                lg: "40px",
                xl: "40px",
                "2xl": "50px",
              }}
              paddingBottom={{
                base: "30px",
                lg: "30px",
                xl: "30px",
                "2xl": "40px",
              }}
              justify="flex-start"
              align="flex-start"
              width="100%"
              height="40vh"
              background="#FFFFFF"
              shadow="0 0 10px 5px rgba(0, 0, 0, 0.1)"
              borderRadius="20px"
            >
              <Stack textColor="#333" direction="row" align="center" mb="10px">
                <Avatar size="md" />
                <Stack direction="row" align="center">
                  <Heading size="md">Kampung Kaki</Heading>
                  <Text fontSize="xs" fontStyle="italic"></Text>
                </Stack>
              </Stack>
              <Stack
                overflowY="auto"
                height="100%"
                width="100%"
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "16px",
                    borderRadius: "8px",
                    backgroundColor: `rgba(0, 0, 0, 0.1)`,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    width: "16px",
                    borderRadius: "8px",
                    backgroundColor: `rgba(237, 46, 56, 1)`,
                  },
                }}
              >
                {isSubmitted ? (
                  <Text>Great response!</Text>
                ) : (
                  <Text>
                    Here are some things to consider as you answer this
                    question!
                  </Text>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  }
};
export default Exercises;
