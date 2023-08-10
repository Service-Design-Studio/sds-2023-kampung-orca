import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useDisclosure,
  Stack,
  Button,
  Text,
  Textarea,
  Avatar,
  Heading,
  Spinner,
} from "@chakra-ui/react";

import { Header } from "../Header";
import useGateway from "../../hooks/useGateway";
import SubmitAlert from "./SubmitAlert";
import ExerciseSection from "./ExerciseSection";
import SendAnswer from "./SendAnswer";
import leafBg from "../../assets/img/leaf-background.png";
import adminAvatar from "../../assets/img/merlion.gif";

export const Exercises = () => {
  const params = useParams();
  const url = window.location.pathname.replace("exercise", "show_exercise");
  console.log(url);

  const {
    isOpen: showSubmitAlert,
    onOpen: openSubmitAlert,
    onClose: closeSubmitAlert,
  } = useDisclosure();

  const back_to_complete = `/curriculum/lesson/${params.lesson_id}/lesson_completed`;

  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mlAnswer, setMlAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [mlAnswerRendered, setMlAnswerRendered] = useState(false);

  useEffect(() => {
    setIsSubmitted(false);
    const storedUserAnswer = sessionStorage.getItem(`userAnswer_${url}`);
    const storedMlAnswer = sessionStorage.getItem(`mlAnswer_${url}`);
    if (storedUserAnswer) {
      setUserAnswer(storedUserAnswer);
    }
    if (storedMlAnswer) {
      setMlAnswer(storedMlAnswer);
    }
  }, [url]);

  const handleSubmitClick = () => {
    openSubmitAlert();
  };

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleResubmission = () => {
    setIsSubmitted(false);
    setMlAnswerRendered(false);
    setUserAnswer("");
  };

  const isTextareaEmpty = value.trim().length === 0;
  const [data] = useGateway(url, "Get");
  if (!data) return;
  else {
    const qns = data.qns;
    const title = data.title;
    const lesson_id = data.lesson_id;

    const callBack = (responseData) => {
      const userAnswer = responseData.data.user_answer;
      const mlAnswer = responseData.data.ml_answer;

      setUserAnswer(userAnswer);
      setMlAnswer(mlAnswer);
      setMlAnswerRendered(true);

      sessionStorage.setItem(`userAnswer_${url}`, userAnswer);
      sessionStorage.setItem(`mlAnswer_${url}`, mlAnswer);
    };

    const handleSubmit = () => {
      setIsSubmitted(true);
      closeSubmitAlert();
      SendAnswer(lesson_id, value, callBack);
    };

    const contentLines = mlAnswer.trim().split("\n");

    return (
      <Stack
        justify="flex-start"
        align="flex-start"
        height="100vh"
        width="100vw"
        background="#FFFFFF"
      >
        <Header
          showBack
          showLogout
          buttontext="Back to Lessons"
          path={back_to_complete}
        />

        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          width="100vw"
          maxWidth="100%"
          style={{
            backgroundImage: `url(${leafBg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <Stack
            direction="column"
            spacing="4vh"
            height={`calc(100vh - 120px)`}
          >
            <Stack
              padding={{
                base: "20px",
                lg: "30px",
                xl: "40px",
                "2xl": "50px",
              }}
              paddingRight={{
                base: "10px",
                lg: "20px",
                xl: "30px",
                "2xl": "40px",
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
              width="48vw"
              height="43vh"
              background="#FFFFFF"
              shadow="0 0 10px 5px rgba(0, 0, 0, 0.1)"
              marginLeft="2vw"
              marginTop="2vh"
              borderRadius="20px"
            >
              <Stack
                justify="flex-start"
                align="flex-start"
                paddingRight={{
                  base: "10px",
                  lg: "10px",
                  xl: "20px",
                  "2xl": "20px",
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
                    base: "20px",
                    lg: "21px",
                    xl: "22px",
                    "2xl": "23px",
                  }}
                  contentSize={{
                    base: "14px",
                    lg: "15px",
                    xl: "16px",
                    "2xl": "17px",
                  }}
                  key={"0"}
                  title={title}
                  content={qns}
                />
              </Stack>
            </Stack>

            <Stack
              paddingX={{
                base: "30px",
                lg: "40px",
                xl: "40px",
                "2xl": "50px",
              }}
              paddingTop={{
                base: "15px",
                lg: "15px",
                xl: "25px",
                "2xl": "35px",
              }}
              paddingBottom={{
                base: "10px",
                lg: "10px",
                xl: "20px",
                "2xl": "30px",
              }}
              justify="flex-start"
              align="flex-start"
              width="48vw"
              height="38vh"
              background="#FFFFFF"
              shadow="0 0 10px 5px rgba(0, 0, 0, 0.1)"
              borderRadius="20px"
              marginLeft="2vw"
              marginBottom="2vh"
              overflowY="auto"
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
                <>
                  <Stack height="100%">
                    <Heading fontSize="20px" mb="10px">
                      {" "}
                      Your answer:
                    </Heading>
                    <Text>{value}</Text>
                  </Stack>

                  <Stack width="100%" justify="flex-end" align="flex-end">
                    {mlAnswerRendered ? (
                      <Button
                        fontSize="18px"
                        bg="#ed2e38" // Change to the desired color (same as the "Submit" button)
                        textColor="#FFFFFF"
                        _hover={{ bg: "#7c191c" }} // Change the hover color if needed
                        size="lg"
                        height="30px"
                        shadow="md"
                        onClick={handleResubmission}
                        marginX="auto" // Change the marginX value to adjust the horizontal position
                      >
                        Re-submit Answer
                      </Button>
                    ) : (
                      <Spinner size="lg" />
                    )}
                  </Stack>
                </>
              ) : (
                <>
                  <Heading
                    fontSize={{
                      base: "14px",
                      lg: "16px",
                      xl: "20px",
                      "2xl": "20px",
                    }}
                    mb={{ base: "2px", lg: "5px", xl: "10px", "2xl": "10px" }}
                    mt={{ base: "2px", lg: "5px", xl: "0px", "2xl": "0px" }}
                  >
                    {" "}
                    Write Your Answer:
                  </Heading>
                  <Textarea
                    width="100%"
                    height="100%"
                    value={value}
                    onChange={handleInputChange}
                    data-cy="exercise-answer-input"
                    placeholder={
                      userAnswer
                        ? "Previous Answer: " + userAnswer
                        : "Write your answer here!"
                    }
                  />
                  <Stack width="100%" justify="flex-start" align="flex-end">
                    <Button
                      fontSize="18px"
                      bg="#ed2e38"
                      textColor="#FFFFFF"
                      _hover={{ bg: "#7c191c" }}
                      size="lg"
                      height="30px"
                      shadow="md"
                      onClick={handleSubmitClick}
                      isDisabled={isTextareaEmpty}
                      data-cy="exercise-submit-button"
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
          </Stack>

          <Stack
            spacing={{
              base: "10px",
              lg: "20px",
              xl: "30px",
              "2xl": "30px",
            }}
            justify="flex-start"
            align="center"
            width="45vw"
            height={`calc(97vh - 120px)`}
            marginX="2vw"
            marginY="2vh"
            direction="column"
          >
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
              height={`calc(100vh - 120px)`}
              background="#FFFFFF"
              shadow="0 0 10px 5px rgba(0, 0, 0, 0.1)"
              borderRadius="20px"
            >
              <Stack textColor="#333" direction="row" align="center" mb="10px">
                <Avatar
                  size="md"
                  shadow="lg"
                  border="1px solid black"
                  src={adminAvatar}
                />
                <Stack direction="row" align="center">
                  <Heading fontFamily="Averia Serif Libre" size="lg">
                    Kampung Kaki
                  </Heading>
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
                <div>
                  {userAnswer ? (
                    <Text>
                      {contentLines.map((line, index) => (
                        <p key={index}>
                          {line}
                          <br />
                        </p>
                      ))}
                    </Text>
                  ) : (
                    <Text>
                      I will guide you through this exercise!
                      {contentLines.map((line, index) => (
                        <p key={index}>
                          {line}
                          <br />
                        </p>
                      ))}
                    </Text>
                  )}
                </div>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  }
};
export default Exercises;
