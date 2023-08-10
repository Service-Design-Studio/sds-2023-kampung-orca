import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Stack, Button, Icon, Text } from "@chakra-ui/react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

import { Header } from "../Header";
import LessonSection from "./LessonSection";
import useGateway from "../../hooks/useGateway";
import ForumButton from "../Forum/ForumBox/ForumButton";
import leafBg from "../../assets/img/leaf-background.png";

export const LessonView = () => {
  const params = useParams();
  const endpoint = window.location.pathname + "/show_pages";
  console.log(endpoint);
  const [data] = useGateway(endpoint, "Get");
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [currentPage]);

  const lesson_complete = `/curriculum/lesson/${params["lesson_id"]}/lesson_completed`;

  const pages = data?.pages;
  const topic_id = data?.topic_id;
  const back_to_lesson_pathway = `/curriculum/topic/${topic_id}`;

  let progress = 50;
  if (pages && pages.length > 1) {
    progress = Math.floor((currentPage / pages.length) * 100) + 1;
  }

  // Define a boolean state variable to track the playing state
  const isPlaying = useState(false);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (!pages) return null;
  if (pages.message) return <Navigate to="/error" />;

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
        path={back_to_lesson_pathway}
      />

      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        width="100vw"
        height={`calc(100vh - 120px)`}
        maxWidth="100%"
        style={{
          backgroundImage: `url(${leafBg})`,
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
          justify="fllex-start"
          align="center"
          overflow="hidden"
          width="50vw"
          height={`calc(100vh - 120px)`}
          background="#FFFFFF"
          shadow="10px 0px 10px -5px rgba(0, 0, 0, 0.3)"
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
            ref={containerRef}
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
            {pages[currentPage]?.sections?.map((section, index) => (
              <LessonSection
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
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </Stack>

          <Stack
            width="100%"
            direction="row"
            justify="space-between"
            align="center"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing="50px"
          >
            <Stack width="100%" direction="row" justify="space-between">
              <Stack flex="1">
                <Stack align="flex-start">
                  {currentPage > 0 && (
                    <Button
                      size="lg"
                      variant="ghost"
                      textColor="#ed2e38"
                      _hover={{ bg: "#ffaea8" }}
                      height="48px"
                      fontSize="18px"
                      leftIcon={<Icon as={FaAnglesLeft} boxSize="7" />}
                      onClick={prevPage}
                      data-cy="previous-page"
                    />
                  )}
                </Stack>
              </Stack>
              <Stack flex="1" align="center" justify="center">
                <Text
                  fontSize={{
                    base: "16px",
                    lg: "17px",
                    xl: "18px",
                    "2xl": "19px",
                  }}
                >
                  {currentPage + 1}
                </Text>
              </Stack>

              <Stack flex="1" zIndex="10">
                <Stack align="flex-end">
                  {currentPage < pages.length - 1 && (
                    <Button
                      size="lg"
                      variant="ghost"
                      textColor="#ed2e38"
                      _hover={{ bg: "#ffaea8" }}
                      height="48px"
                      fontSize="18px"
                      rightIcon={<Icon as={FaAnglesRight} boxSize="7" />}
                      onClick={nextPage}
                      data-cy="next-page"
                    />
                  )}

                  {currentPage === pages.length - 1 && (
                    <Link to={lesson_complete}>
                      <Button
                        size="lg"
                        variant="ghost"
                        bg="#ed2e38"
                        textColor="#FFFFFF"
                        _hover={{ bg: "#7c191c" }}
                        height="48px"
                        fontSize="18px"
                        data-cy="complete-lesson"
                      >
                        Complete Lesson
                      </Button>
                    </Link>
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          justify="center"
          align="center"
          width="50vw"
          height={`calc(100vh - 120px)`}
          paddingBottom="50px"
        >
          <Stack direction="column">
            {pages[currentPage]?.video && (
              <Stack
                borderRadius="0px 0px 0px 0px"
                justify="flex-start"
                align="center"
                overflow="hidden"
                background="#E0C825"
                shadow="0 0 10px 5px rgba(0, 0, 0, 0.3)"
                width="45vw"
                height="60vh"
              >
                <iframe
                  title="kampung"
                  src={pages[currentPage].video}
                  width="100%"
                  height="100%"
                  data-cy={isPlaying ? "iframe-playing" : "iframe-not-playing"}
                />
              </Stack>
            )}
          </Stack>

          <Stack
            position="fixed"
            direction="row"
            justify="flex-end"
            align="flex-end"
            width="45vw"
            bottom="22px"
          >
            <ForumButton />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default LessonView;
